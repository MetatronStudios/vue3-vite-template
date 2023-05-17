/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
   root: true,
   extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-prettier/skip-formatting',
      'eslint-config-airbnb-base',
   ],
   rules: {
      camelcase: 'off',
      'no-console': 'off',
      'object-curly-newline': 'off',
      'vue/valid-v-slot': ['error', {
         allowModifiers: true,
      }],
      'no-param-reassign': [
         'error',
         {
            props: true,
            ignorePropertyModificationsFor: [
               'state',
            ],
         },
      ],
      'max-len': ['warn', 1000],
      'vue/html-indent': ['warn', 3],
      'linebreak-style': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'no-alert': 'off',
      'prefer-destructuring': 'off',
      radix: 'off',
      'object-shorthand': 'off',
      'no-underscore-dangle': 'off',
      indent: ['warn', 3],
      'func-names': ['error', 'as-needed'],
   },
   parserOptions: {
      ecmaVersion: 13,
   },
};
