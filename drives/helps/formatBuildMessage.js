const chalk = require('chalk')

function format(textArr = []) {
  if (textArr.length) {
    return textArr.map(text => '  ' + text).join('\n')
  }

  return ''
}

function formatFileSize(size) {
  const value = size / 1024

  if (value < 1) {
    return size + ' B'
  }

  return value.toFixed(2) + ' KB'
}

function formatResult(stats) {
  const title = chalk.bold('Build result:\n')
  let maxSizeStrLength = 0

  const buildInfo = [
    '  Cost:' + '  ' + stats.time + ' ms',
    '  buildAt:' + '  ' + new Date(stats.builtAt).toLocaleString()
  ].reduce((strs, s) => strs + '\r\n' + s ) + '\n\n'

  const result = stats.assets
    .map(asset => {
      const sizeStr = formatFileSize(asset.size)
      const len = sizeStr.length

      if (len > maxSizeStrLength) {
        maxSizeStrLength = len
      }

      return {
        name: asset.name,
        size: sizeStr
      }
    })
    .reduce((strs, obj) => {
      const str = '  ' + obj.size + 'x'.repeat(maxSizeStrLength - obj.size.length).replace(/x/g, ' ') +
        '  ' + chalk.cyan(obj.name) + '\r\n'

      return strs + str
    }, '')

  return title + buildInfo + result
}

function formatBuildMessage(stats) {
  const errors = chalk.red(format(stats.errors))
  const warnnings = chalk.yellow(format(stats.warnnings))
  const result = formatResult(stats)

  return result + '\n' +
    (errors ? chalk.red('ERROR: ') + '\n' + errors : '') +
    (warnnings ? '\n\n' + chalk.yellow('WARNING: ') + '\n' + warnnings : '')
}

module.exports = formatBuildMessage
