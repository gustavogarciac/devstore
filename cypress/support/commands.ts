/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(email: string): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')

  cy.get('input[name=q]').type(query).parent('form').submit()
})
