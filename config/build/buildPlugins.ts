import CopyPlugin from "copy-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildPats } from "./types/buildTypes"

export const buildPlugins = (paths: BuildPats): webpack.WebpackPluginInstance[] => {
  return [new HtmlWebpackPlugin({
    template: paths.html
  }),
  new webpack.ProgressPlugin(),
  new CopyPlugin({
    patterns: [
      { from: paths.fav, to: paths.build},
    ]
  }),
  new MiniCssExtractPlugin({
   filename: "[name].[contenthash:8].css"
  })
]
}