import { Validation } from '@/application/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  public validate (fieldName: string, input: object): string {
    return this.errorMessage
  }
}
