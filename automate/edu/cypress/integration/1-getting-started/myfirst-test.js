/// <reference types="cypress" />

describe('My First Test', function () {
    it('visit the web', function () {
        cy.visit('https://shopee.co.id')
    })
})