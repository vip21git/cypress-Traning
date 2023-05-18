export default {
    putRequest() {
        cy.fixture('putData').then((bodyData) => {
            cy.request({
                method: 'PUT',
                url: Cypress.env('putApiUrl'),
                body: bodyData
            }).as('response')
        })
    },
    
    verifyUserNameInResponse(expectedUsername) {
        cy.get('@response').then((value) => {
            let actualUsername = JSON.stringify(value)
            expect(actualUsername).to.include(expectedUsername)
        })
    }


}
