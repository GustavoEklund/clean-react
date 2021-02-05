import { AccountModel } from '../models/account-model'

type AuthenticationsParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticationsParams): Promise<AccountModel>
}
