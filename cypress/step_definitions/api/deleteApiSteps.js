import deleteApiPage from "../../pageObject/deleteApiPage" 
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("DELETE Method API to Delete User",()=>{
    deleteApiPage.deleteRequest()
})

Then("Verify the {string} should not be present in the updated list",(name)=>{
    deleteApiPage.verifyResponseOfDeleteReq()
})