import { FieldValidation } from '@/application/validation/protocols/field-validation'
import { RequiredFieldError } from '@/application/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
