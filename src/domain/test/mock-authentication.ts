import { AuthenticationsParams } from '@/domain/usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationsParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
