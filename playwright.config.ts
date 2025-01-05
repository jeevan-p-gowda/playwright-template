import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
  path: `${process.cwd()}/.env/${process.env.ENV}.env`,
});

export default defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: [['html', { open: 'never' }], ['./src/utils/WinstonLoggerConfig.ts']],
  use: {
    viewport: { width: 1280, height: 720 },
    browserName: 'chromium',
    headless: !true,
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    storageState: `.auth/${process.env.ENV}-auth.json`,
  },
  expect: { timeout: 15000 },
  globalSetup: require.resolve('./src/fixtures/GlobalSetup.ts'),
  globalTeardown: require.resolve('./src/fixtures/GlobalTeardown.ts'),
});
