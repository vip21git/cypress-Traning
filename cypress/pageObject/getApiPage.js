export default {
    getRequest(url) {
        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false
        }).then((r) => {
        }).as('response');
    },

    verifyResponseofGetRequest(responseMessage) {
        cy.get('@response').its('status').should("equal", parseInt(responseMessage))
    },
    verifyUsernameInResponse(firstname) {
        cy.get('@response').its('body.data[1].first_name').should("equal", firstname)
    }
}
