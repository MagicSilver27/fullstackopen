import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node
    },
  plugins: {
    '@stylistic/js': pluginJs
  },
  rules: {
    '@/indent': [
      'error',
      2
    ],
    '@/linebreak-style': [
      'error',
      'windows'
    ],
    '@/quotes': [
      'error',
      'single'
    ],
    '@/semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true },
    ],
    'no-console': 'off',
  },
},
  pluginJs.configs.recommended,
];