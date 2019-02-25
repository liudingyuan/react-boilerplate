module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': false,
        'helpers': true,
        'regenerator': true,
        'useESModules': true
      }
    ]
  ]
}
