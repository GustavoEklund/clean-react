import { HttpClient, HttpStatusCode } from '@/domain/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export interface Authentication {
  auth: (params: Authentication.Input) => Promise<Authentication.Output>
}

export class AuthenticationUseCase implements Authentication {
  public constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<Authentication.Output>
  ) {}

  public async auth (input: Authentication.Input): Promise<Authentication.Output> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: input
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      case HttpStatusCode.badRequest: throw new UnexpectedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace Authentication {
  export type Input = {
    email: string
    password: string
  }
  export type Output = AccountModel
}
