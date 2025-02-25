# Contributing

The framework has been built following industry best practices to ensure robustness. We encourage contributors to adhere to the guidelines below to maintain this standard.

## Style Guide

### Repo

- **File** : Follow PascalCase naming.

  ex: `CommonAsserions.ts`, `LoginPage.ts`

- **Folder** : The first letter should be lowercase, and subsequent words should start with an uppercase letter.

  ex: `apiClients/`, `apiFixtures/`

- **Spec** : Any file that is specific to a framework, library, or system should follow its native naming convention.

  ex: `endpoints.json`

### Objects

- **Classes / Interface/ Enums** - Follow PascalCase naming.

  ex: `class Table {}`, `enum Sse {}`, `interface Endpoints {}`

- **Functions** - The first letter should be lowercase, and subsequent words should start with an uppercase letter.

  ex: `async apiBuilder(){}`, `func randomString(){}`

- **Variables** - The first letter should be lowercase, and subsequent words should start with an uppercase letter.

  ex: `var textBox`, `page: Page`, `type fixtures = {}`

### Git

- **Branch name** : If a JIRA ticket is created for the task, use its ID (for accountability); otherwise, use a short name for the task.

  ex: `CLSESEN-123`, `src-refactor`, `sentinel-tests`

- **Commit message** : A concise summary of the commit, usually limited to 50 characters.

  ex: `improve error handling on login form submission`

### Pull request

- **Title**: Start with JIRA ticket id, followed by an meaning full title.

  ex: `tests[JIRA ticker id]: E2E tests of sentinel alerts`

## Coding

Get a walkthrough of the framework before stepping into it.

Strictly follow **SRP** while coding.
- **Branching** - Always pull the latest changes from the `main` branch before creating a new branch.
- **Scripting**

  - Create page objects, assertions, utilities, resources, and spec files only if they do not already exist.
    - Use fixtures for setup and teardown.
    - Leverage API's for creating and cleaning up test data.
    - Attach tags for grouping tests when necessary.
    - Ensure the test case name matches the test repository for better traceability.
    - Follow the AAA pattern when designing test scripts.
  > Refer to existing resources and test specs for better understanding.

- **Linting and formatting** - ESLint and Prettier are configured to automatically format code when saving the file.
- **Type checking** 
  - A Git pre-commit hook using Husky ensures type checking.
  - Resolve any errors before committing changes.
- **Execute** 
  - Run tests using Playwright CLI commands, VS Code Playwright Test Runner, or Playwright UI.
- **Debugging** 
  - Use Playwright Debugger or VS Code Debugger for step-by-step execution.
  - Utilize Playwright HTML reports, screenshots, videos, or the Trace Viewer for debugging failed tests.

## Pull Request, CI, and Merging

### Pull Request

- **Description** 
  - Provide additional information if necessary.
  - Attach test results from both local and CI runs.
- **Review** - Add code owners for review.

### CI

Branch validation has been carried out on Jenkins Multi branch pipeline.

- **Pre-requisite**
  - Prepare a `.env` file and store it scoped to pipeline.
- **Trigger a test run**
  - Navigate to Pull Requests -> PR Title -> Build with Parameters.
  - Fill in all required fields and start the build.
  - Review the test results after execution and investigate any failures.

### Merging

Merging to the `main` branch has to be done only after evaluation the following,

- All reviewer comments must be addressed and reviewed again.
- Test runs on both local and CI environments must pass.

## Best practices

- **Readability** - Use clear and meaningful names when creating files, folders, and objects to enhance understanding.

- **Topology** - Organize files, folders, and objects within their respective modules for better traceability.

- **Optimization** - Avoid duplication and remove unused imports, declarations, and dependencies. Optimize the code for better performance.

- **Comments** - Add comments where necessary to provide tips and hints for better comprehension.

- **Execution** - Run each test locally multiple times before raising a PR to minimize flakiness.

## Enhancements

- Kindly discuss with code owners before making any such.
