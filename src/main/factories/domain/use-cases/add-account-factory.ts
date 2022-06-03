import { makeAxiosHttpClient } from '@/main/factories/infra/http/axios-http-client-factory'
import { makeApiUrl } from '@/main/factories/infra/http/api-url-factory'
import { AddAccount, AddAccountUseCase } from '@/domain/use-cases'

export const makeAddAccountUseCase = (): AddAccount => {
  return new AddAccountUseCase(makeApiUrl('/signup'), makeAxiosHttpClient())
}
