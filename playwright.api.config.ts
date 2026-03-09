import { defineConfig, request } from '@playwright/test';
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

export default (async () => {
  console.log('Getting access token...');
  const requestContext = await request.newContext();
  const response = await requestContext.get(process.env.AUTH_URL as string, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${process.env.API_KEY}:${process.env.API_SECRET}`).toString('base64')}`,
    },
  });
  const responseJson = await response.json();
  const accessToken = responseJson.access_token as string;
  console.log('Access token obtained');

  return defineConfig({
    testDir: './tests',
    workers: 1,
    timeout: 30 * 1000,
    reporter: [['html', { open: 'never' }], ['./src/utils/WinstonLoggerConfig.ts'], ['junit', { outputFile: 'playwright-report/junit.xml' }]],
    use: {
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      }
    }
  });
})();
