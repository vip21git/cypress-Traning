export default {

    deleteRequest() {
        cy.fixture('deleteData').then((bodyData) => {
            cy.request({
                method: 'DELETE',
                url: Cypress.env('deleteApiUrl'),
                body: bodyData
            }).as('response')
        })
    },

    verifyResponseOfDeleteReq() {
        cy.get('@response').its('status').should("equal", 204)
    }

}
