import { FullConfig, Reporter, Suite, TestCase, TestError, TestResult } from '@playwright/test/reporter';
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
        message = `\x1b[31m${message}\x1b[0m`;
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

  onError(error: TestError): void {
    logger.error(`Error occurred: ${error.message}`);
  }
}
