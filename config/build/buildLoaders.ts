import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from 'webpack'

export const buildLoaders = (): webpack.ModuleOptions => {
  const typescripLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  }

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
  
  
  return {
    rules: [typescripLoader, scssLoader, babelLoader],
  }
}