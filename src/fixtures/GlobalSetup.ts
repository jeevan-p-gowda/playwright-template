import { chromium } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';

async function globalSetup() {
  console.log('--Executing global setup--');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(process.env.BASE_URL as string);
  const loginPage: LoginPage = new LoginPage(page);
  await loginPage.login(process.env.EMAIL as string, process.env.PASSWORD as string);
  await page.context().storageState({ path: `.auth/${process.env.ENV}-auth.json` });
  await browser.close();
  console.log('--Global setup completed--');
}

export default globalSetup;
