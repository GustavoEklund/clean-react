import { AuthenticationsParams } from '@/domain/usecases/authentication'
import faker from 'faker'
import { AccountModel } from '../models/account-model'

export const mockAuthentication = (): AuthenticationsParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
