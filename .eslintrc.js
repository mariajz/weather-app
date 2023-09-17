module.exports = {
    root: true,
    extends: [
        '@react-native',
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:jsx-control-statements/recommended',
    ],
    plugins: ['prettier', 'react-native', 'jsx-control-statements'],
    rules: {
        'prettier/prettier': 0,
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        'no-console': 'error',
    },
};
