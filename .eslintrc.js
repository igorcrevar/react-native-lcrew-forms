export default {
  root: true,
  extends: '@react-native-community',
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jest/globals": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:import/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react", "jest"
  ],
  "rules": {
      "react/display-name": [0, { "ignoreTranspilerName": 0 }],
      "react/prop-types": 0,
      "react/jsx-uses-vars": [2],
      "react/jsx-curly-spacing": [
          "off", {
              "when": "never",
              "children": {
                  "when": "always"
              }
          }
      ],
      "no-console": "off",
      "space-infix-ops": ["error", {"int32Hint": false}],
      "no-multi-spaces": "error",
      "space-before-blocks": "error",
      "brace-style": ["error", "stroustrup", { "allowSingleLine": false }],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "no-var": "error",
      "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
      "indent": ["error", 4],
      "quotes": ["error", "single" ],
      "semi": ["error", "never"]
  }
}
