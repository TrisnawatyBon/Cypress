// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('payment', (payee, account, amount, date, description) => {
    cy.get('#sp_payee').select(payee)

    cy.get('#sp_account').select(account)
    
    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type(amount)

    cy.get('#sp_date').clear()
    cy.get('#sp_date').type(date)
    cy.get('a').contains('10').click()

    cy.get('#sp_description').type(description)

    cy.get('#pay_saved_payees').click()
})

Cypress.Commands.add('signin', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type(username)
    
    cy.get('#password').clear()
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('data', (firstName, lastName, postalCode) => {
    cy.get('#first-name').clear()
    cy.get('#first-name').type(firstName)
    
    cy.get('#last-name').clear()
    cy.get('#last-name').type(lastName)

    cy.get('#postal-code').clear()
    cy.get('#postal-code').type(postalCode)
})

Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
  ) => {
    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
      username: email,
      password,
    }).then((response) => {
      cy.setCookie('sessionId', response.body.sessionId)
      cy.setCookie('userId', response.body.userId)
      cy.setCookie('userName', response.body.userName)
      cy.visit('/#!/main')
    })
  })
  
  
   