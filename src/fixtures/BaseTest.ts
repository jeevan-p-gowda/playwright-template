import { test as baseTest } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';
import CommonPage from '../pageObjects/CommonPage';

type fixtures = {
    env: string,
    email: string,
    password: string,
    testHook: void
}

export const test = baseTest.extend<fixtures>({
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
        console.log('Navigating to base URL');
        await page.goto("/");

        await use();
    }, { auto: true }]
})
