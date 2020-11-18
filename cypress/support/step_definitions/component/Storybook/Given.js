/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:9009/ '


Given('I open a storybook page', () => {
  cy.visit(url)
})

Given('DUMMY', () => {
  cy.visit(url)
  cy.get('#intro--page').contains('Intro').click()
    cy.get('#tiles-contenttile').click()
    cy.get('#tiles-contenttile--basic').click()
})

Given('DUMMY 2', () => {
  cy.visit(url)
  cy.get('.css-1grksfm[type=range] ')
  .invoke('val', 0.5)
  .trigger('change')
  .get('.css-7pf6at > :nth-child(3)')
  .should('have.text', '0.5 / 1')

  cy.get('#storybook-preview-iframe').toMatchImageSnapshot();
  cy.screenshot();
})

Given('should see Title updatedDUMMY 3', () => {
  cy.get('#title')
  .type(' has started').should('have.value', 'Programme title has started')
  cy.get('#storybook-preview-iframe').toMatchImageSnapshot();
  cy.screenshot();
})
