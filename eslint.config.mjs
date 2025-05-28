// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    rules: {
      'max-len': 'off',
      'no-console': 'off',
      semi: 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-empty-pattern': 'off',
      'no-require-imports': 'off',
      'no-self-assign': 'off',
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: '.',
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
    },
  },
]);
