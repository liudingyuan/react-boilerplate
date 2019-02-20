const path = require('path')

const projectDir = process.cwd()
const resolvePath = relativePath => path.resolve(projectDir, relativePath)

module.exports = {
  entry: resolvePath('src/index.js'),
  public: resolvePath('public'),
  output: resolvePath('dist'),
  htmlTemplate: resolvePath('public/index.html')
}
