module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parser: 'vue-eslint-parser',
  plugins: [
    'pug',
    'eslint-plugin-vue'
  ],
  rules: {
    semi: 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE === 'production' ? 'never' : 'warn',
    'no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-multiple-template-root': 'warn',
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'no-useless-constructor': 0,
    'keyword-spacing': 'error'
  }
};
