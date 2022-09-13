const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin:  CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#e44031' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};