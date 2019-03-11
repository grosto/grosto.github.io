module.exports = {
    "plugins": ["prettier"],
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb", "prettier", "plugin:prettier/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-indent": 0,
        "consistent-return": 0,
        "prettier/prettier": ["error", {"singleQuote": true }],
        "max-len": ["error", { "code": 100 }],
        "react/jsx-filename-extension": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-one-expression-per-line": 0,
    }
};