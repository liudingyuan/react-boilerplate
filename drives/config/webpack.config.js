const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = (env) => {
  const isProductionEnv = env === 'production'
  const isDeveleopmentEnv = env === 'development'

  return {
    mode: isProductionEnv ? 'production' : 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
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
        template: paths.htmlTemplate
      }),
      isDeveleopmentEnv && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
  }
}
