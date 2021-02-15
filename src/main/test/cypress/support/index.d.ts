declare namespace Cypress {
  interface Chainable {
    dataCy: (id: string) => Chainable<Element>
  }
}
