module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    rules: {
        'indent': [2,4],
        'react/jsx-indent': [2,4],
        'react/jsx-indent-props': [2,4],
        'react/forbid-prop-types': [0],
        'react/jsx-filename-extension': [0],
        'react/prefer-stateless-function': [0],
        'no-underscore-dangle': [0],
        'import/no-extraneous-dependencies': [0],
        'import/no-unresolved': [0],
        'arrow-body-style': [0],
    },
    globals: {},
};