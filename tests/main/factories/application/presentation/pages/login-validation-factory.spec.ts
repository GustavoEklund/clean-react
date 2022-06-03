import { ValidationComposite, ValidationBuilder } from '@/application/validation/validators'
import { makeLoginValidations } from '@/main/factories/application/presentation/pages/login/login-validation-factory'

describe('LoginValidationFactory', () => {
  test('Should compose ValidationComposite with correct validations', () => {
    const composite = makeLoginValidations()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
