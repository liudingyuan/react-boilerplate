const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')
const {
  loadJS,
  loadCSS,
  loadLess,
  loadSass,
  loadAssets
} = require('./webpack.module')

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
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.jsx']
    },
    module: {
      strictExportPresence: true,
      rules: [
        loadJS(),
        loadCSS({include: paths.src}),
        loadLess({include: paths.src}),
        loadSass({include: paths.src}),
        ...loadAssets()
      ]
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
