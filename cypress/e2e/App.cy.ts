/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('**/kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/*').as('getPlayers')
  })
  it('At least one player is fetched', () => {
    cy.wait('@getPlayers')
    cy.get('#root > :nth-child(4)')
    .should('exist')
  })
})

export {}