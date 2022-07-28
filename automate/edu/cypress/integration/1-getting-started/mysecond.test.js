/// <reference types="cypress" />

describe('My Second Test', function () {
    it('Finds Mozilla Firefox', function () {
        cy.visit('https://www.mozilla.org/en-US/firefox/')
    })
})