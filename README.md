# playwright-template <img align="right" src="https://playwright.dev/img/playwright-logo.svg" width="auto" height="100" title='Playwright'/>

This repository provides a template for getting started with building a Playwright framework. It includes a pre-configured setup for writing, running, and managing end-to-end tests for web applications.

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
3. Run `git clone` - to clone the repo
4. Install [VS Code](https://code.visualstudio.com/) Editor and open the repo
5. Install recommended VS code extensions
6. Run `make setup` - install all dependencies.
7. Create a folder 📁.env under the root dir, then within it create `<env_file_name>.env` file containing variables of app which has to be maintained as a secret. Below is the example,
   ```env
   BASE_URL=https://web-playground.ultralesson.com/account/login
   EMAIL=xxxx@gmail.com
   PASSWORD=Xxxx@xx24
   ```
   > Config secrets on CI differs from tool to tool, kindly refactor / use different approach.

### ⏯️Execution
`ENV=<env_file_name> yarn playwright test <relative_path_to_test_file>`
> [!NOTE]
> If using Windows, set IDE terminal to Git Bash and execute.

### 🧑🏻‍🦯Guide
* Follow [this](COMMANDS.md) for different commands to run tests.
* Refer [this](CONTRIBUTING.md) for contributing.

### 🔨Troubleshoot
If you encounter any dependency issues, follow these steps:
1. Delete the `node_modules` folder and the `yarn.lock` file.
2. Run `yarn` to install the dependencies.
