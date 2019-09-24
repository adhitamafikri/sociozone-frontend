module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
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
        "react",
        "prettier",
    ],
    "rules": {
      "semi": ["error", "never"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "settings": {
      "import/resolver": {
        "node": {
          "paths": ["src"],
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
};
