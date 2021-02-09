import { HttpPostClient } from '../../protocols/http/http-post-client'
import { AuthenticationsParams } from '../../../domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationsParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}
