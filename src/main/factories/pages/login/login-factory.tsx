import React from 'react'
import { makeLoginValidations } from './login-validation-factory'
import { makeRemoteAuthentication } from '@/main/usecases/authentication/remote-authentication-factory'
import { makeLocalSaveAccessToken } from '@/main/usecases/save-access-token/local-save-access-token-factory'
import { Login } from '@/presentation/pages'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidations()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
