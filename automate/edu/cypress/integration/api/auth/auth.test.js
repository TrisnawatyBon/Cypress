describe('Basic Auth', () => {
    it('Succesfully login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it('Successfully login using headers', function () {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it.only('Successfully login via API', () => {
        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/basic_auth',
            failOnStatusCode: false
        })
        cy.loginViaAPI(username = Cypress.env('userEmail'), password = Cypress.env('userPassword'))
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })

    it('Successfully login via API', () => {
        cy.loginViaAPI(Cypress.env('userEmail'), Cypress.env('userPassword'))
    })
})