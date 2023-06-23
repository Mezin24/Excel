import  path from 'path';
import  webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import  CopyPlugin from "copy-webpack-plugin"

const config: webpack.Configuration = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.ts',
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
      { from: path.resolve(__dirname, 'src', 'favicon.ico'), to: path.resolve(__dirname, 'dist')},
    ]
  })
],
  devtool: 'inline-source-map',
};

export default config