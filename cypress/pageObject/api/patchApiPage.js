export default {

   patchRequest() {
      cy.fixture('patchData').then((bodyData) => {
         cy.request({
             method: 'PATCH',
             url: Cypress.env('patchApiUrl'),
             body: bodyData
         }).as('response')
     })
   },

   verifyJobTitleFromResponse(jobTitle){
      cy.get('@response').then((value) => {
         let actualUsername = JSON.stringify(value)
         expect(actualUsername).to.include(jobTitle)
     })
   },


}