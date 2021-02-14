import { AccountModel } from '@/domain/models'

export type AddAccountParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface Authentication {
  add: (params: AddAccountParams) => Promise<AccountModel>
}
