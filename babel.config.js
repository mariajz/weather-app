module.exports = {
    presets: [
        ['module:metro-react-native-babel-preset'],
        [
            '@babel/preset-env',
            {
                loose: true,
            },
        ],
    ],
    plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
};
