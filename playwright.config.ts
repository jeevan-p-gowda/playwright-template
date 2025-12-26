import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

import fs from 'fs';
import path from 'path';

// Check if .env folder exists and contains files
const envFolderPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envFolderPath)) {
  throw new Error('.env folder does not exist');
}

// Check if .env folder contains any .env files
const envFiles = fs.readdirSync(envFolderPath).filter((file) => file.endsWith('.env'));
if (envFiles.length === 0) {
  throw new Error('No .env files found in .env folder, please create one');
}

// Check if specific .env file exists for the passed environment
if (process.env.ENV) {
  const specificEnvFile = path.join(envFolderPath, `${process.env.ENV}.env`);
  if (!fs.existsSync(specificEnvFile)) {
    throw new Error(`Environment file '${process.env.ENV}.env' not found in .env folder. Available files: ${envFiles.join(', ')}`);
  }
}

dotenv.config({
  path: `${process.cwd()}/.env/${process.env.ENV}.env`,
});

export default defineConfig({
  testDir: './tests',
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  timeout: 30 * 1000,
  reporter: [['html', { open: 'never' }], ['junit', { outputFile: 'playwright-report/junit.xml' }], ['./src/utils/WinstonLoggerConfig.ts']],
  use: {
    viewport: { width: 1280, height: 720 },
    browserName: 'chromium',
    headless: process.env.CI ? true : false,
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    storageState: `.auth/${process.env.ENV}-auth.json`,
    navigationTimeout: 40 * 1000,
    actionTimeout: 80 * 1000,
  },
  expect: { timeout: 15000 },
  globalSetup: require.resolve('./src/fixtures/GlobalSetup.ts'),
  globalTeardown: require.resolve('./src/fixtures/GlobalTearDown.ts'),
});
