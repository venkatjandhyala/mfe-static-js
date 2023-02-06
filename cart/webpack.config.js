const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new EnvironmentPlugin({
      CONTAINER: true
    }),
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartIndex': './src/bootstrap.js'
      },
      shared: {
        faker: {
          singleton: true
        }
      }
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ]
}