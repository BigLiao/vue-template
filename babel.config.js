module.exports = {
  presets: ['@vue/app', '@vue/babel-preset-jsx'],
  plugins: [['component',
    {
      'libraryName': 'mint-ui',
      'style': true
    }
  ]]
};
