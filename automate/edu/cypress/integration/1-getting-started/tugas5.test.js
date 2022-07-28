/// <reference types="cypress" />

describe('Sauce Labs Test Case', () => {
    it('Should add product to cart and complete checkout product from the web', () => {
        cy.visit('https://www.saucedemo.com')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.signin(username, password)
            cy.url().should('include', '/inventory.html')
            
            cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
            cy.get('#shopping_cart_container').click()
            cy.url().should('include', '/cart.html')

            cy.get('#checkout').click()
            cy.url().should('include', '/checkout-step-one.html')
        })
        cy.fixture("user").then(user => {
            const firstName = user.firstName
            const lastName = user.lastName
            const postalCode = user.postalCode
            cy.data(firstName, lastName, postalCode)

            cy.get('#continue').click()
            cy.url().should('include', '/checkout-step-two.html')

            cy.get('#finish').click()
            cy.url().should('include', '/checkout-complete.html')
        })
    })
})