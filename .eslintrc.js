module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": 0,
        "arrow-body-style": 0,
        "react/forbid-prop-types": false
      },
      "env": {
        "browser": true,
        "node": true,
        "jest/globals": true
      },
      "parser": "babel-eslint",
      "plugins": ["jest"],
};