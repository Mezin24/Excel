import { BuildPats, EnvProps } from './config/build/types/buildTypes';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';

export default (env: EnvProps) => {
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const paths: BuildPats = {
    html: path.resolve(__dirname, 'src', './index.html'),
    build: path.resolve(__dirname, 'dist'),
    entry: ['@babel/polyfill', './index.ts'],
    context: path.resolve(__dirname, 'src'),
    fav: path.resolve(__dirname, 'src', 'assets', 'favicon.ico')
  }

  return buildWebpackConfig({mode, paths, isDev})
}