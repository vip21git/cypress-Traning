export default {
    getRequest(url) {
        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false
        }).then((r) => {
        }).as('response');
    },

    verifyResponseofGetRequest(statusCode) {
        cy.get('@response').its('status').should("equal", parseInt(statusCode))
    },
    verifyUsernameInResponse(firstname) {
        cy.get('@response').its('body.data[1].first_name').should("equal", firstname)
    }
}
