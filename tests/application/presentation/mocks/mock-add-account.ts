import { AddAccount } from '@/domain/use-cases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/tests/domain/mocks'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccount.Input
  callsCount = 0

  async add (input: AddAccount.Input): Promise<AccountModel> {
    this.params = input
    this.callsCount++
    return this.account
  }
}
