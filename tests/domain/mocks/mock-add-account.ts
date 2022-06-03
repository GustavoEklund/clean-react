import { AddAccount } from '@/domain/use-cases'
import faker from 'faker'

export const mockAddAccountParams = (): AddAccount.Input => {
  const password = faker.internet.password()
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}
