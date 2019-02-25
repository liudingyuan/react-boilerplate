const path = require('path')

const projectDir = process.cwd()
const resolvePath = relativePath => path.resolve(projectDir, relativePath)

module.exports = {
  entry: resolvePath('src/index'),
  output: resolvePath('dist'),
  src: resolvePath('src'),
  public: resolvePath('public'),
  htmlTemplate: resolvePath('public/index.html'),
  tsConfig: resolvePath('tsconfig.json')
}
