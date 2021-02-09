import { AccountModel } from '@/domain/models/account-model'

export type AuthenticationsParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticationsParams): Promise<AccountModel>
}
