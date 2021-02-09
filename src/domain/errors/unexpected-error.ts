export class UnexpectedError extends Error {
  constructor () {
    super('Algo deu errado. Tente novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
