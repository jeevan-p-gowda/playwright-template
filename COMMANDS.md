## Instructions
1. **Running Tests**:
- Run all tests: Execute every test script in your project with `yarn playwright test`
- Run a single test file: Target a specific file, e.g., `yarn playwright test tests/login-page.spec.ts`
- Run a set of test files: Group multiple test files, e.g., `yarn playwright test tests/user-flow/ tests/auth/`

2. **Filtering and Specifying Tests**:
- Run files by name pattern: Use patterns to target tests, e.g., `yarn playwright test user-registration* login*`
- Run tests at a specific line: Target a test at a certain line in a file, e.g., `yarn playwright test user-registration.spec.ts:42`
- Run tests by title: Execute tests with a specific title, e.g., `yarn playwright test -g "should log in successfully"`

3. **Browser and Visualization Options**:
- Run tests in headed browsers: For visual debugging, use `yarn playwright test --headed`
- Run tests in a specific browser: To test in a single browser, e.g., `yarn playwright test --browser=firefox`

4. **Parallel Execution and Debugging**:
- Disable parallelization: For linear execution, use `yarn playwright test --workers=1`
- Debug tests: Launch tests in debug mode with `yarn playwright test --debug` to enable Playwright Inspector.

5. **Interactive Testing and Help**:
- Interactive UI mode: Run tests interactively with `yarn playwright test --ui`, ideal for developing new tests.
- Help command: Access detailed command options with `yarn playwright test --help`.
- Viewing report `yarn playwright show-report`

### Practical Examples:
- Combining Commands for Specific Scenarios:
    - Avoid flakiness: `yarn playwright test tests/sentinel/ --repeat-each 100 --only-changed`
    - Debugging a Specific Test in Headed Mode: `yarn playwright test --headed --debug tests/login-page.spec.ts`
    - Running Tests in All Browsers: `yarn playwright test --browser=all`
    - Running a Subset of Tests in Parallel: `yarn playwright test --workers=4 tests/user-flow/`

- Advanced Options:
  - Custom Configuration File: Use a specific config file with `yarn playwright test -c config/integration-tests-config.ts`
  - Running Tests with Custom Reporter: Set a custom reporter, e.g., `yarn playwright test --reporter=json`
  - Sharding Tests for Distributed Execution: Divide tests into shards using `yarn playwright test --shard=1/3`

- Code Generation:
  - Basic codegen: Record user interactions and generate test scripts with `yarn playwright codegen`
  - Generate with specific URL: Target a particular browser for recording, e.g., `yarn playwright codegen https://google.com`

> [!TIP]
> Experiment with different CLI commands to tailor test runs according to your needs.
> Use environment variables alongside CLI commands for more dynamic test configurations.
> Regularly review Playwright's documentation for updates on CLI options.
