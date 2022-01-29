const RULE = {
  OFF: 'off',
  ERROR: 'error',
};

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'parserOptions': {
    'tsconfigRootDir': __dirname,
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
    'project': './tsconfig.eslint.json',
  },
  'overrides': [
    {
      'files': ['*.ts'],
    },
  ],
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'import/prefer-default-export': RULE.OFF,
    'import/no-unresolved': RULE.OFF,
    'import/extensions': RULE.OFF,
    'no-underscore-dangle': RULE.OFF,
    'require-jsdoc': RULE.OFF,
    'max-len': [RULE.ERROR, { 'code': 160, 'comments': 80 }],
    'indent': [RULE.ERROR, 2],
    'arrow-parens': [RULE.ERROR, 'as-needed'],
    'space-in-parens': [RULE.ERROR, 'always'],
    'object-curly-spacing': [RULE.ERROR, 'always'],
    'sort-imports': [RULE.ERROR, { 'allowSeparatedGroups': true, 'memberSyntaxSortedOrder': ['none', 'all', 'single', 'multiple'] }],
  },
};
