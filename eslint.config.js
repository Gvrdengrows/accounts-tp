import pluginVue from "eslint-plugin-vue";
import globals from "globals";

const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

export default [
  ...pluginVue.configs["flat/recommended"],
  ...eslintPluginPrettierRecommended,
  {
    rules: {
      // override/add rules settings here, such as:
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
];
