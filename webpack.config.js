const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//const extract = require('mini-css-extract-plugin')

const config = {
  entry: ["@babel/polyfill", path.resolve(__dirname, './source/main.js')],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [extract.loader, "css-loader?modules=true&localIdentName=[hash:base64:15]"]
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    // new webpack.DefinePlugin({
    //   PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   BASE: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://tvmaze.now.sh' : 'http://localhost:3000'),
    // })
  ],
  target: 'web',
}

module.exports = config;
