import { HttpClient, HttpStatusCode } from '@/domain/protocols/http'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export interface AddAccount {
  add: (input: AddAccount.Input) => Promise<AddAccount.Output>
}

export class AddAccountUseCase implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpClient<AddAccount.Output>
  ) {}

  async add (input: AddAccount.Input): Promise<AddAccount.Output> {
    const httpResponse = await this.httpPostClient.request({
      method: 'post',
      url: this.url,
      body: input
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace AddAccount {
  export type Input = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }
  export type Output = AccountModel
}
