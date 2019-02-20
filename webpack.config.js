const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const fs = require('fs-extra')

// fs.emptyDirSync(path.resolve(__dirname, 'dist'))

module.exports = (env) => {
  const isProductionEnv = env === 'production'
  const isDeveleopmentEnv = env === 'development'

  return {
    mode: isProductionEnv ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProductionEnv
        ? 'assets/js/[name].[chunkhash:8].js'
        : 'assets/js/bundle.js',
      publicPath: '/'
    },
    module: {
      strictExportPresence: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, './public/index.html')
      }),
      isDeveleopmentEnv && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean),
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 3000,
      clientLogLevel: 'none',
      hot: true,
      publicPath: '/',
      quiet: true,
      historyApiFallback: {
        disableDotRule: true,
      },
    }
  }
}
