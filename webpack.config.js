// webpack.config.js
const path = require('path');
const env = require('yargs').argv.env
const ExtractTextPlugin = require('extract-text-webpack-plugin');

if (env === 'build') {
    mode = 'production';
  } else {
    mode = 'development';
}

module.exports = {
    mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }, {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
            fallback : 'style-loader',
            use : [
                'css-loader',
                'sass-loader'
            ]
        })
       },
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};