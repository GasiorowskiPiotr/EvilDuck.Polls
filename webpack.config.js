var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var TARGET = process.env.TARGET || 'dev';
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: [path.resolve(ROOT_PATH, 'client/client.jsx')],
  output: {
    path: path.resolve(ROOT_PATH, 'public/javascripts'),
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=1',
        include: path.resolve(ROOT_PATH, 'client')
      }
    ],
  }
};

// we'll extend these later and use merge then
if(TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}

if(TARGET === 'dev') {
  module.exports = common;
}
