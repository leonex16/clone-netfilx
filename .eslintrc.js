const RULE = {
  OFF: 'off',
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
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'import/prefer-default-export': RULE.OFF,
    'import/no-unresolved': RULE.OFF,
    'import/extensions': RULE.OFF,
    'no-underscore-dangle': RULE.OFF,
    'max-len': 160,
  },
};
