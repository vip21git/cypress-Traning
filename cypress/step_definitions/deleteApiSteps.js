import deleteApiPage from "../pageObject/deleteApiPage" 
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is on the Home page of Website for Delete API",()=>{
    deleteApiPage.deleteRequest()
})

Then("the response should not contain the following updated {string} in the list",(name)=>{
    deleteApiPage.verifyResponseOfDeleteReq()
})