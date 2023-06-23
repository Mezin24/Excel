import  path from 'path';
import  webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import  CopyPlugin from "copy-webpack-plugin"
import  MiniCssExtractPlugin from "mini-css-extract-plugin"

const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src', 'core'),
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', './index.html')
  }),
  new webpack.ProgressPlugin(),
  new CopyPlugin({
    patterns: [
      { from: path.resolve(__dirname, 'src', 'assets', 'favicon.ico'), to: path.resolve(__dirname, 'dist')},
    ]
  }),
  new MiniCssExtractPlugin({
   filename: "[name].[contenthash:8].css"
  })
],
  devtool: 'inline-source-map',
};

export default config