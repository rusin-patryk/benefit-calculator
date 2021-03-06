module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 'off',
    'no-trailing-spaces': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 'off',
    semi: 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    camelcase: 'off',
    indent: 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    quotes: 'off',
    curly: 'off',
    'arrow-parens': 'off',
    'no-else-return': 'off',
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'object-shorthand': 'off',
    'arrow-body-style': 'off',
    'prefer-destructuring': 'off',
    'array-callback-return': 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
