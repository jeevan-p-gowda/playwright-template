import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
  path: `${process.cwd()}/.env/${process.env.ENV}.env`,
});

export default defineConfig({
  testDir: './tests',
  workers: 1,
  timeout: 30 * 1000,
  reporter: [['html', { open: 'never' }], ['./src/utils/WinstonLoggerConfig.ts'], ['junit', { outputFile: 'playwright-report/junit.xml' }]],
});
