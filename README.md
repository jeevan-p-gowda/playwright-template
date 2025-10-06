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
5. Install recommended VS code [extensions](.vscode/extensions.json)
6. Run `make setup` - install all dependencies.
7. Create a folder 📁.env under the root dir, then within it create `<env_file_name>.env` file containing variables of app which has to be maintained as a secret. Below is the example,
   ```env
   BASE_URL=https://web-playground.ultralesson.com/account/login
   EMAIL=xxxx@gmail.com
   PASSWORD=Xxxx@xx24
   ```
> [!CAUTION]
> Do not hardcode any sensitive information

### ⏯️Execution
`ENV=<env_file_name> yarn playwright test <relative_path_to_test_file>`
> [!WARNING]
> If using Windows, set IDE terminal to Git Bash and execute.

### 🧬Features
* Reporting: Utilized native playwright html report, view by executing `yarn playwright show-report`.
* Debugging: follow steps mentioned [here](CONTRIBUTING.md).

### ♾️CI
Follow one of the below examples to configure CI.
1. Jenkins - Create a pipeline as per required style, map the [Jenkinsfile](Jenkinsfile) in build config.
2. Github Actions - [.yml](.github/workflows/feature.yml) will reflect automatically in Actions when pushed.
> [!IMPORTANT]
> Install all plugins for Jenkins mentioned in [Jenkinsfile](Jenkinsfile) comments.
> Delete [.yml](.github/workflows/feature.yml) if using different CI tool other than Github Actions.

### 🧑🏻‍🦯Guide
* Follow [this](COMMANDS.md) for different commands to run tests.
* Refer [this](CONTRIBUTING.md) for contributing.

### 🔨Troubleshoot
If you encounter any dependency issues, follow these steps:
1. Delete the `node_modules` folder and the `yarn.lock` file.
2. Run `yarn` to install the dependencies.
> [!TIP]
> Upgrade playwright with `yarn up @playwright/test`
> Set yarn latest stable version with `yarn set version stable`
