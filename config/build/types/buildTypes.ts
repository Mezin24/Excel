export type ModeTypes = 'production' | 'development'

export interface BuildPats {
  html: string,
  build: string,
  entry: string | string[],
  fav: string,
  context: string
}

export interface EnvProps  {
  mode: ModeTypes,
}

export interface BuildOptions {
  mode: ModeTypes,
  paths: BuildPats,
  isDev: boolean
}