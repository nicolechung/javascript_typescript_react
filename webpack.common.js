const path = require('path')
const ThreadLoader = require('thread-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')

const entry = {
  main: ['@babel/polyfill', './src/index.js']
}

const output = {
  path: path.join(__dirname, '/dist'),
  filename: 'index_bundle.js'
}

const rules = [
  {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'thread-loader',
        options: {
          workers: 2,
        }
      },
      'babel-loader'
    ]
  }
]

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html'
  }),
  new ForkTsCheckerWebpackPlugin(),
  new ForkTsCheckerNotifierWebpackPlugin()
]

const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
  alias: {
    common: path.resolve(__dirname, './src/common'),
    components: path.resolve(__dirname, './src/components'),
    styles: path.resolve(__dirname, './src/styles')
  }
}

module.exports = {
  entry: entry,
  output: output,
  plugins: plugins,
  resolve: resolve,
  module: {
    rules: rules
  }
}