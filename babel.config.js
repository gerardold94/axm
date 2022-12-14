module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@': './app',
          '@assets': './assets',
          '@common': './common',
          '@components': './features',
        },
      },
    ],
  ],
};
