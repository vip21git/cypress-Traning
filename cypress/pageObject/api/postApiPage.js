export default{
   
   postRequest(){
        cy.fixture('postData').then((bodyData) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('postApiUrl'),
                body: bodyData
            }).as('response')
        })
    },
    
    verifyEmailInResponse(expectedEmail){
        cy.get('@response').then((value) => {
           let actualEmail = JSON.stringify(value)
            expect(actualEmail).to.include(expectedEmail)
        })
    },
   
}
