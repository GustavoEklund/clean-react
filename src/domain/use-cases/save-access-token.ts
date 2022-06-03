import { SetStorage } from '@/domain/protocols/cache/set-storage'
import { UnexpectedError } from '@/domain/errors'

export interface SaveAccessToken {
  save: (accessToken: string) => Promise<void>
}

export class SaveAccessTokenUseCase implements SaveAccessToken {
  public constructor (private readonly setStorage: SetStorage) {}

  public async save (accessToken: string): Promise<void> {
    if (!accessToken) throw new UnexpectedError()
    await this.setStorage.set('accessToken', { accessToken })
  }
}
