import { And } from "cypress-cucumber-preprocessor/steps";

And("User click on My Info", ()=>{
    cy.contains('My Info').should('be.visible').click()
})
And("User edit the personal application details", ()=>{
    cy.get('input[name="middleName"]').should('be.visible').clear().type('Lorem')
    cy.scrollTo('bottom')
    cy.contains('Save').first().should('be.visible').click()
    cy.get('[id="oxd-toaster_1"]').contains('Successfully')
})
And("User sign out from application", ()=>{
    cy.get('span[class="oxd-userdropdown-tab"]').should('be.visible').click()
})
