const env = 'development'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')
const argv = require('yargs').argv
const opn = require('opn')
const detectPort = require('detect-port')
const inquirer = require('inquirer')

const createWebpackCfg = require('../config/webpack.config')
const createWebpackDevServerCfg = require('../config/webpackDevServer.config')
const wdsOptions = {
  port: argv.port || 3000,
  host: argv.host || 'localhost'
}

const baseConfig = createWebpackCfg(env)
const devServerCfg = createWebpackDevServerCfg(wdsOptions)

// HMR entry points
webpackDevServer.addDevServerEntrypoints(baseConfig, devServerCfg)

const compiler = webpack(baseConfig)
const server = new webpackDevServer(compiler, devServerCfg)

// start webpack-dev-server
function setup(port, host) {
  const url = `http://${host}:${port}`

  server.listen(port, host, () => {
    console.log(chalk.cyan(`Starting server on ${chalk.green.underline(url)}`))
    // open the url in the default browser.
    opn(url)
  })
}

detectPort(wdsOptions.port, wdsOptions.host)
  .then(port => {
    const prevPort = wdsOptions.port

    if (port === prevPort) {
      setup(port, wdsOptions.host)
    } else {
      inquirer.prompt({
        type: 'confirm',
        name: 'useNextPort',
        message: chalk.yellow(`The ${prevPort} port was occupied, use another one?`),
        default: true
      }).then(({useNextPort}) => {
        if (useNextPort) {
          setup(port, wdsOptions.host)
        } else {
          process.exit()
        }
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
