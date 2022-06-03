import { Authentication, AuthenticationUseCase } from '@/domain/use-cases'
import { makeAxiosHttpClient } from '@/main/factories/infra/http/axios-http-client-factory'
import { makeApiUrl } from '@/main/factories/infra/http/api-url-factory'

export const makeAuthenticationUseCase = (): Authentication => {
  return new AuthenticationUseCase(makeApiUrl('/login'), makeAxiosHttpClient())
}
