module.exports = {
    preset: 'react-native',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coverageDirectory: 'coverage',
    transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
};
