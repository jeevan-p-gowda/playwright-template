import { test as baseTest } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';
import CommonPage from '../pageObjects/CommonPage';

type variables = {
    env: string,
    email: string,
    password: string,
    testHook: void
}

export const test = baseTest.extend<variables>({
    env: async ({ }, use) => {
        await use(process.env.ENV as string);
    },

    email: async ({ }, use) => {
        await use(process.env.EMAIL as string);
    },

    password: async ({ }, use) => {
        await use(process.env.PASSWORD as string);
    },

    testHook: [async ({ page, email, password }, use) => {
        // page.on('console', msg => {
        //     if (msg.type() === 'error') {
        //         console.error('Error:', msg.text());
        //         throw new Error(msg.text());
        //     }
        // });
        await page.goto("/");
        const commonPage = new CommonPage(page);
        await commonPage.navigateToLoginPage();
        const loginPage = new LoginPage(page);
        await loginPage.login(email, password);
    }, { auto: true }]
})
