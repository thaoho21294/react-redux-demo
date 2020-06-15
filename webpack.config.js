const path = require('path');
const webpack = require('webpack');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
  },
};

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*'],
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react'],
      },
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.module\.scss$/,
      use: ['style-loader', CSSModuleLoader, 'sass-loader'],
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
      'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY),
      'process.env.COSMIC_WRITE_KEY': JSON.stringify(process.env.COSMIC_WRITE_KEY),
    }),
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
};
