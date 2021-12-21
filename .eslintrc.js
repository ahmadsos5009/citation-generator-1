module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    parser: '@typescript-eslint/parser',
    rules: {
        "react/prop-types": 0,
        "react/no-unescaped-entities": 0,
        "react/require-default-props": 0,
        "react/no-unused-prop-types": 0,
        "no-param-reassign": 0,
        "@typescript-eslint/no-use-before-define": "off",
        "import/prefer-default-export": "off",
    },
};
