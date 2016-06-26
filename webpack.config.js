var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/js/');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: {
    index: APP_DIR + '/components/index/Index.jsx',
    contact: APP_DIR + '/components/contact/Contact.jsx',
    safety: APP_DIR + '/components/safety/Safety.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
