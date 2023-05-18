import dashboardPage from "../../pageObject/web/dashboardPage";
import {And,Then } from "cypress-cucumber-preprocessor/steps";

And("User click on My Info", ()=>{
    cy.contains('My Info').should('be.visible').click()
})
And("User edit the personal application details", ()=>{
    dashboardPage.updateDetails()
})
And("User sign out from application", ()=>{
    dashboardPage.signOut()
})
Then("Verify details updated successfully",()=>{
    dashboardPage.verifyToastMessage()
})