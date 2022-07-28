/// <reference types="cypress" />

describe('Automation API with pokeapi', () => {
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
        
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('body').should('include', {name: "ditto"})

    })

    it('Succesfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    })

    it('Successfully validate status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })

    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: "bulbasaur"})
    })
    it.only('Succesfully validate body', () => {
        var user = {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
        }
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.eq(user.name)
        })
    })

    it('Successfully validate negative response', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)
    })
})