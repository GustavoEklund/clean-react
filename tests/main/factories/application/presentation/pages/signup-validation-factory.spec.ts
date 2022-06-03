import { ValidationComposite, ValidationBuilder as Builder } from '@/application/validation/validators'
import { makeSignUpValidation } from '@/main/factories/application/presentation/pages/signup/signup-validation-factory'

describe('SignUpValidationFactory', () => {
  test('Should compose ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...Builder.field('name').required().min(3).build(),
      ...Builder.field('email').required().email().build(),
      ...Builder.field('password').required().min(5).build(),
      ...Builder.field('passwordConfirmation').required().sameAs('password').build()
    ]))
  })
})
