function loadJS() {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    },
  }
}

function loadCSS({include}) {
  return {
    test: /\.css$/,
    include,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer')
          ]
        }
      }
    ]
  }
}

function loadLess({include}) {
  return {
    test: /\.less$/,
    include,
    use: ['style-loader', 'css-loader', 'less-loader']
  }
}

function loadSass({include}) {
  return {
    test: /\.(scss|sass)$/,
    include,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
}

function loadAssets() {
  return [
    {
      test: /\.(bmp|gif|jpe?g|png)$/,
      loader: 'url-loader',
      options: {
        limit: 10 * 1024,
        name: 'assets/media/[name].[hash:8].[ext]',
      }
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: 'file-loader',
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10 * 1024,
            noquotes: true
          }
        }
      ]
    }
  ]
}

module.exports = {
  loadJS,
  loadCSS,
  loadLess,
  loadSass,
  loadAssets
}
