const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/js/script.js'),
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  plugins: [new MiniCssExtractPlugin(),
            new OptimizeCssAssetsWebpackPlugin(),
            new StylelintPlugin(options),
            new TerserWebpackPlugin(),
            new HtmlWebpackPlugin({
              filename: "index.html",
              template: "index.pug"
          }),
          new HtmlWebpackPlugin({
              filename: "faq.html",
              template: "faq.pug"
          }),
          ],
  optimization: {
              minimize: true,
              minimizer: [
                  new OptimizeCssAssetsWebpackPlugin(),
                  new TerserWebpackPlugin(),]
 } ,
  module: {
      rules: [
          {
              test: /\.(eot|ttf|woff|svg)$/i,
              use: ['file-loader']
          },
          {
            test: /\.css$/,
              use: [
                  'style-loader',
                  {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          publicPath: path.resolve(__dirname, 'dist'),
                          esModule: true,
                      },
                  },
                  'css-loader',
                  
              ],
          },
          {
            test: /\.pug$/,
            use: 'pug-loader'
        },
        {
            test: /\.js$/,
            exclude: '/node_modules/',
            use: 'eslint-loader'
        }
        ]
  },
}
