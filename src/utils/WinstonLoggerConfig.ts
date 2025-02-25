/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { FullConfig, Reporter, Suite, TestCase, TestError, TestResult, TestStep } from '@playwright/test/reporter';
import { test } from '@playwright/test';

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf((info: { timestamp: any; level: string; message: string | string[] }) => {
      let message = `[${info.timestamp}] ${info.level}: ${info.message}`;
      if (info.level === 'info' && info.message.includes('passed')) {
        message = `\x1b[32m${message}\x1b[0m`;
      } else if (
        info.message.includes('timedOut') ||
        info.message.includes('failed') ||
        info.message.includes('interrupted') ||
        info.message.includes('error')
      ) {
        message = `\x1b[31m${message}\x1b[0m`;
      } else if (info.level === 'skipped') {
        message = `\x1b[33m${message}\x1b[0m`;
      } else {
        message = message;
      }
      return message;
    })
  ),
  transports: [new winston.transports.Console()],
});

export default class WinstonLoggerConfig implements Reporter {
  onBegin(config: FullConfig, suite: Suite): void {
    logger.info(`Launching: ${config.projects[0].use.browserName}`);
  }

  onTestBegin(test: TestCase): void {
    logger.info(`Test case started: ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    logger.info(`Test case completed: ${test.title} Status : ${result.status}`);
  }

  onStdOut(chunk: string | Buffer, test: void | TestCase, result: void | TestResult): void {
    logger.info(chunk.toString());
  }

  onStdErr(chunk: string | Buffer, test: void | TestCase, result: void | TestResult): void {
    logger.error(chunk.toString());
  }

  onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
    if (step.category === `test.step`) {
      // logger.info(`Executing : ${step.title} function`);
      logger.info(`${step.title}`);
    }
  }

  onError(error: TestError): void {
    logger.error(`Error occurred: ${error.message}`);
  }
}

/**
 * Decorator function for wrapping POM methods in a test.step.
 *
 * Use it without a step name `@step()`.
 *
 * Or with a step name `@step("Search something")`.
 *
 * @param stepName - The name of the test step.
 * @returns A decorator function that can be used to decorate test methods.
 */
export function step(stepName?: string): any {
  return function decorator(target: Function, context: ClassMethodDecoratorContext) {
    return function replacementMethod(...args: any) {
      const name = `${stepName || (context.name as string)}`;
      return test.step(name, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
