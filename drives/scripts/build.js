const env = 'production'

const webpack = require('webpack')
const fs = require('fs-extra')
const paths = require('../config/paths')

const createConfig = require('../config/webpack.config')
const formatBuildMessage = require('../helps/formatBuildMessage')

const baseConfig = createConfig(env)
const compiler = webpack(baseConfig)

// clean the dist directory
fs.emptyDir(paths.output)

// build
compiler.run((err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  // printf build info
  console.log(formatBuildMessage(stats.toJson({
    assetsSort: "!size",
  })))
})
