# Contributing

The framework has been built following industry best practices to ensure robustness. We encourage contributors to adhere to the guidelines below to maintain this standard.

Get a walkthrough of the framework before stepping into it.

## Coding

Strictly follow **SRP** while coding.
- **Branching** - Always pull the latest changes from the `main` branch before creating a new branch from it.
- **Scripting**

  - Create page objects, assertions, utilities, resources, and spec files only if they do not already exist.
    - Use fixtures for setup and teardown.
    - Leverage API's for creating and cleaning up test data.
    - Attach tags for grouping tests when necessary.
    - Ensure the test case name matches the test name in test repository for better traceability.
    - Follow the AAA pattern when designing test scripts.
  > Refer to existing resources and test specs for better understanding.

- **Linting and formatting** - **_ESLint_** and **_Prettier_** are configured to automatically format and lint the code on saving the file.
- **Type checking** 
  - A git pre-commit hook has been configured using **_Husky_** ensures type checking.
  - Resolve any errors before committing changes.
- **Execute** 
  - Run tests using Playwright CLI commands, VS Code Playwright Test Runner, or Playwright UI.
- **Debugging** 
  - Use Playwright Debugger or VS Code Debugger for step-by-step execution.
  - Utilize Playwright HTML reports, screenshots, videos, or the Trace Viewer for debugging failed tests.

## Style Guide

### Repo

- **File** - follow PascalCase naming.

  ex: `CommonAsserions.ts`, `LoginPage.ts`

- **Folder** - follow CamelCase naming.

  ex: `apiClients/`, `apiFixtures/`

- **Spec** - any file that is specific to a framework, library, or system should follow its native naming convention.

  ex: `endpoints.json`

### Objects

- **Classes / Interface/ Enums** - follow PascalCase naming.

  ex: `class Table {}`, `enum Sse {}`, `interface Endpoints {}`

- **Functions** - follow CamelCase naming.

  ex: `async apiBuilder(){}`, `func randomString(){}`

- **Variables** - follow CamelCase naming.

  ex: `var textBox`, `page: Page`, `type fixtures = {}`

### Git

- **Branch name** - If a JIRA ticket is created for the task, use its ID (for accountability); otherwise, use a short name (kebab case) for the task.

  ex: `CLSESEN-123`, `src-refactor`, `sentinel-tests`

- **Commit message** - A concise summary of the commit, usually limited to 50 characters.

  ex: `improve error handling on login form submission`

### Pull request

- **Title** - Start with JIRA ticket id, followed by an meaningful title.

  ex: `tests[JIRA ticker id]: E2E tests of sentinel alerts`


## Pull Request, CI, and Merging

### Pull Request

- **Description** 
  - Provide additional information if necessary.
  - Attach test results from both local and CI runs.
- **Review** - Add code owners for review.

### CI

Branch validation has been carried out on Jenkins Multi branch pipeline.

- **Pre-requisite**
  - Prepare a `<env_file_name>.env` file which has required secrets and store it scoped to pipeline.
- **Trigger a test run**
  - Navigate to Pull Requests -> PR Title -> Build with Parameters.
  - Fill in all required fields and start the build.
  - Review the test results after execution and investigate any failures.

### Merging

Merging to the `main` branch has to be done only after evaluation the following,

- All reviewer comments must be addressed and reviewed again after pushing resolves.
- Test runs on both local and CI environments must pass.

## Best practices

- **Readability** - Use clear and meaningful names when creating files, folders, and objects to enhance understanding.

- **Topology** - Organize files, folders, and objects within their respective modules for better traceability.

- **Optimization** - Avoid duplication and remove unused imports, declarations, and dependencies. Optimize the code for better performance.

- **Comments** - Add comments where necessary to provide tips and hints for better comprehension.

- **Execution** - Run each test locally multiple times before raising a PR to minimize flakiness.

## Enhancements

- Kindly discuss with code owners before making any such.
