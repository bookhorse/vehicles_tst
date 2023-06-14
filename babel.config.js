const rootImportOpts = {
  paths: [
    {
      root: __dirname,
      rootPathPrefix: '@/',
      rootPathSuffix: 'src',
    },
  ]
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['babel-plugin-root-import', rootImportOpts]]
  };
};
