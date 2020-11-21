// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    // now this runs prior to every test
    // across all files no matter what
    cy.log("BeforeEach")
  })

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  });

  Cypress.Commands.add('refCy', (value) => {
    return cy.get(`[ref=${value}]`)
  })

  Cypress.Commands.add('texturetextCy', (value) => {
    return cy.get(`[texture-text=${value}]`)
  })