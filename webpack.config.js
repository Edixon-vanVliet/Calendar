const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const mode = (argv || {}).mode || 'development';
  const isLocal = mode === 'development';

  // Rules
  const JsRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: isLocal ? [{ loader: 'babel-loader', options: { cacheDirectory: true } }] : ['babel-loader'],
  };

  const SassRule = {
    test: /\.scss|css$/,
    exclude: /node_modules/,
    use: [
      isLocal ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]_[local]_[hash:base64:5]',
          },
          importLoaders: 1,
          sourceMap: isLocal,
        },
      },
      'sass-loader',
    ],
  };

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    devtool: isLocal && 'eval',
    module: {
      rules: [JsRule, SassRule],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin({ filename: 'app_[chunkhash].css' }),
      new webpack.DefinePlugin({ 'process.env': { isLocal } }),
    ],
    optimization: {
      minimize: !isLocal,
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: isLocal ? '/' : '/calendar/',
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        components: path.resolve(__dirname, './src/components'),
        redux: path.resolve(__dirname, './src/redux'),
        styles: path.resolve(__dirname, './src/styles'),
      },
    },
    mode,
  };
};
