
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/buildTypes';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths, isDev} = options

  return {
    mode,
    context: paths.context,
    entry: {
      main: paths.entry,
    },
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    module: buildLoaders(),
    resolve: buildResolvers(),
    plugins: buildPlugins(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
  }
};