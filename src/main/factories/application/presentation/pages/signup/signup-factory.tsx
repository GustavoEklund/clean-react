import React from 'react'
import { SignUp } from '@/application/presentation/pages'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeAddAccountUseCase, makeSaveAccessTokenUseCase } from '@/main/factories/domain/use-cases'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeAddAccountUseCase()}
      validation={makeSignUpValidation()}
      saveAccessToken={makeSaveAccessTokenUseCase()}
    />
  )
}
