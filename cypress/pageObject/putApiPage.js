export default {
    putRequest() {
        cy.fixture('putData').then((bodyData) => {
            cy.request({
                method: 'PUT',
                url: Cypress.config('apiMethodUrl'),
                body: bodyData
            }).as('response')
        })
    },
    
    verifyUserName(username) {
        cy.get('@response').then((value) => {
            let actualUsername = JSON.stringify(value)
            expect(actualUsername).to.include(username)
        })
    }


}
