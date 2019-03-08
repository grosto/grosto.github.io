module.exports = {
    "plugins": ["prettier"],
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb-base", "prettier", "plugin:prettier/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "consistent-return": 0,
        "prettier/prettier": ["error", {"singleQuote": true }]
    }
};