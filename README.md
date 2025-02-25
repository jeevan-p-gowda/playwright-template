# playwright-template <img align="right" src="https://playwright.dev/img/playwright-logo.svg" width="auto" height="100" title='Playwright'/>

This repository provides a template for getting started with Playwright testing framework. It includes a pre-configured setup for writing, running, and managing end-to-end tests for web applications.

### 🧩Application
E-Commerce - [Website](https://web-playground.ultralesson.com)

[Swagger](https://www.apicademy.dev/docs/)

[Postman publish](https://documenter.getpostman.com/view/31125524/2s9YXmWKgB)

[Postman collection](https://www.apicademy.dev/postman-collection-download). Import the downloaded JSON into Postman.

### 🏗️Pre-requisite
1. TypeScript foundations and beyond.
2. Playwright.

### 🛠️Setup
1. Install [Git Bash](https://git-scm.com/downloads) - for Windows
2. Install [NodeJS](https://nodejs.org/en) >=18 - based on your platform
3. `git clone` the repo
4. Install [VS Code](https://code.visualstudio.com/) Editor and open the repo
5. Install recommended VS code extensions
6. `make setup` - setting up the project.
7. Create a folder 📁.env under the root dir, then within it create `.env` file containing variables of app which has to be maintained as a secret. Below is the example,
   ```env
   stage.env
   BASE_URL=https://web-playground.ultralesson.com/account/login
   EMAIL=xxxx@gmail.com
   PASSWORD=Xxxx@xx24
   ```
   > Config secrets on CI differs from tool to tool, kindly refactor / use different approach.

### ⏯️Execution
`ENV=<env name> yarn playwright test <relative path to test file>`
> If using Windows, set IDE terminal to Git Bash and execute.

### 🧑🏻‍🦯Guide
* Follow [this](COMMANDS.md) for different commands to run tests.
* Refer [this](CONTRIBUTING.md) for contributing.