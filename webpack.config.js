const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'browser', 'AppClient.js'),
  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: 'bundle.js'
  },
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
   module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-object-rest-spread']
        },
      }
    ]
  }
}

