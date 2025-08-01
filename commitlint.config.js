export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New features
        'fix', // Bug fixes
        'docs', // Documentation changes
        'style', // Code style changes (formatting, missing semicolons, etc.)
        'refactor', // Code refactoring
        'perf', // Performance improvements
        'test', // Adding or updating tests
        'chore', // Maintenance tasks, dependencies, etc.
        'ci', // CI/CD changes
        'build', // Build system changes
        'revert', // Reverting previous commits
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
}
