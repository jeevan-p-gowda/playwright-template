import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
    console.log('--Executing Tear Down--');
    console.log('--Tear Down Completed--');
}

export default globalTeardown;