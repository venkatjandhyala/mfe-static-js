const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');

module.exports = {
  mode: 'development',
  devServer: { // start dev webpack server on port
    port: 8081
  },
  plugins: [ 
    new EnvironmentPlugin({
      CONTAINER: false
    }),
    new ModuleFederationPlugin({ // used to create entry points as a package to standalone application
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap.js'
      },
      shared: {
        faker: {
          singleton: true
        }
      }
    }),
    new HTMLWebpackPlugin({ // used to dynamically add bunles into index.html
      template: './public/index.html'
    })
  ]
}