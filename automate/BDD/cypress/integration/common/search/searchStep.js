import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import searchPage from "./searchPage";

Given('I open Search page', () => {
    searchPage.visit()
})

When('I type text and submit', () => {
    searchPage.fillsearchterm('online {enter}')
})

Then('I should see Search result', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
    cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
    cy.get('a').should('contain.text', 'Zero - Online Statements')
})