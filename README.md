# playwright-template <img align="right" src="https://playwright.dev/img/playwright-logo.svg" width="auto" height="100" title='Playwright'/>

This repository provides a template for getting started with Playwright testing framework. It includes a pre-configured setup for writing, running, and managing end-to-end tests for web applications.

### 🧩Application
E-Commerce - [Website](https://web-playground.ultralesson.com)

### 🏗️Pre-requisite
1. TypeScript foundation and beyond
2. Playwright basics

### 🛠️Setup
1. Install [Git Bash](https://git-scm.com/downloads) - for Windows
2. Install [NodeJS](https://nodejs.org/en) - based on your platform
3. `git clone` the repo
4. Install [VS Code](https://code.visualstudio.com/) Editor and open the repo
5. `npm i` - installs all dependencies
6. `npx playwright install` - installs all required browsers
7. Create a folder 📁env under the root dir, then within it create `.env` file containing variables of app which has to be maintained as a secret. Below is the example,
   ```env
   stage.env
   BASE_URL=https://web-playground.ultralesson.com/account/login
   EMAIL=xxxx@gmail.com
   PASSWORD=Xxxx@xx24
   ```
   > Config secrets on CI differs from tool to tool, kindly refactor / use different approach.

### ⏯️Execution
`ENV=<env name> npx playwright test <path to test file>`
> If using Windows, set IDE terminal to Git Bash and execute.
