import { SaveAccessToken, SaveAccessTokenUseCase } from '@/domain/use-cases'
import { makeLocalStorageAdapter } from '@/main/factories/infra/cache/local-storage-adapter-factory'

export const makeSaveAccessTokenUseCase = (): SaveAccessToken => {
  return new SaveAccessTokenUseCase(makeLocalStorageAdapter())
}
