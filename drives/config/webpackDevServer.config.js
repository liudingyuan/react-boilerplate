const paths = require('./paths')

module.exports = (options) => {
  return {
    contentBase: paths.public,
    compress: true,
    port: options.port,
    host: options.host,
    clientLogLevel: 'error',
    hot: true,
    publicPath: '/',
    quiet: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  }
}
