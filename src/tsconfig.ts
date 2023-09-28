import { getTsconfig as findTsconfig, TsConfigJsonResolved } from 'get-tsconfig'

const cache = new Map<string, unknown>()

export function getTsconfig(
  searchPath: string,
  configName: string,
): TsConfigJsonResolved | undefined {
  return findTsconfig(searchPath, configName, cache)?.config
}
