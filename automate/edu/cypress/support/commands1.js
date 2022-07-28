Cypress.Commands.add('log', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login_button').click()
})