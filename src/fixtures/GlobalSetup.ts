import { chromium, FullConfig } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

async function globalSetup(config: FullConfig) {
  console.log('--Executing global setup 🌐--');
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  console.log('Navigating to base URL...');
  await page.goto(baseURL!);
  const loginPage: LoginPage = new LoginPage(page);
  console.log('Logging to the application...');
  await loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
  console.log('Setting storage state...');
  await page.context().storageState({ path: storageState as string });
  await browser.close();
  console.log('--Global setup completed ✅--');
}

export default globalSetup;
