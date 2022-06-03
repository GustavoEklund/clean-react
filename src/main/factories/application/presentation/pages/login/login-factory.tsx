import React from 'react'
import { makeLoginValidations } from './login-validation-factory'
import { makeAuthenticationUseCase, makeSaveAccessTokenUseCase } from '@/main/factories/domain/use-cases'
import { Login } from '@/application/presentation/pages'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeAuthenticationUseCase()}
      validation={makeLoginValidations()}
      saveAccessToken={makeSaveAccessTokenUseCase()}
    />
  )
}
