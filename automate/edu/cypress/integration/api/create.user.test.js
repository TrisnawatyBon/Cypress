describe('Create New User', () => {
    it('Succesfully create new user', () => {
        var user = {
            "name": "trisna",
            "job": "QA Engineer"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).to.eq(user.name)
            expect(response.body.job).to.eq(user.job)
        })
    })
})