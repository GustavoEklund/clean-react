import { Authentication, AuthenticationsParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticationsParams

  async auth (params: AuthenticationsParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}
