const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const paths = require('./paths')

module.exports = ({isDeveleopmentEnv}) => {
  return [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.htmlTemplate
    }),
    isDeveleopmentEnv && new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: paths.tsConfig,
      compilerOptions: {},
      watch: paths.src,
      async: false,
      reportFiles: ['src/**/*.{ts,tsx}'],
      checkSyntacticErrors: true,
      silent: true
    })
  ].filter(Boolean)
}
