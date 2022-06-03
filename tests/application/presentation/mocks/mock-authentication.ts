import { Authentication } from '@/domain/use-cases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/tests/domain/mocks'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: Authentication.Input
  callsCount = 0

  async auth (input: Authentication.Input): Promise<AccountModel> {
    this.params = input
    this.callsCount++
    return this.account
  }
}
