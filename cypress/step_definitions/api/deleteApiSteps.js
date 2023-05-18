import deleteApiPage from "../../pageObject/api/deleteApiPage" 
import { Given,Then } from "cypress-cucumber-preprocessor/steps";

Given("DELETE Method to Delete User",()=>{
    deleteApiPage.deleteRequest()
})

Then("Verify the {string} should not be present in the updated list",(name)=>{
    deleteApiPage.verifyResponseOfDeleteReq()
})