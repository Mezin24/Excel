import webpack from 'webpack'

export const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {},
    preferAbsolute: true,
    mainFiles: ['index'],
  }
}