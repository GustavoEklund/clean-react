import { ValidationComposite, ValidationBuilder as Builder } from '@/application/validation/validators'

export const makeLoginValidations = (): ValidationComposite => {
  return ValidationComposite.build([
    ...Builder.field('email').required().email().build(),
    ...Builder.field('password').required().min(5).build()
  ])
}
