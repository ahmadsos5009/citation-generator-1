module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    parser: '@typescript-eslint/parser',
    rules: {
        "react/prop-types": 0,
        "react/no-unescaped-entities": 0,
        "@typescript-eslint/no-use-before-define": "off"
    },
};
