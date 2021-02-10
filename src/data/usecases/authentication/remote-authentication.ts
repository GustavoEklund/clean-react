import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { Authentication, AuthenticationsParams } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationsParams, AccountModel>
  ) {}

  async auth (params: AuthenticationsParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      case HttpStatusCode.badRequest: throw new UnexpectedError()
      default: throw new UnexpectedError()
    }
  }
}
