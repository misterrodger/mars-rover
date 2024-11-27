module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    // 'plugin:functional/recommended',  // not for this project
    'plugin:functional/external-typescript-recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'plugins': [
    '@typescript-eslint',
    'functional'
  ],
  'rules': {
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn', { 'vars': 'all', 'varsIgnorePattern': '^_$', 'argsIgnorePattern': '^_$', 'ignoreRestSiblings': true }],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'eol-last': ['error', 'always'],
    // 'no-console': 'warn',
    'no-loop-func': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-destructuring': ['error', {
      array: true,
      object: true
    }, { enforceForRenamedProperties: true }],
    'no-var': 'error',
    'no-param-reassign': 'error',
    'no-undef': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-restricted-syntax': ['error', 'SwitchStatement'],
    'object-shorthand': ['error', 'always'],
    'no-useless-return': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error'
  }
};
