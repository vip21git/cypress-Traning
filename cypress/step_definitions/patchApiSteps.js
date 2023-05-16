import patchApiPage from "../pageObject/patchApiPage";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is on the Home page of Website for Patch API",()=>{
    patchApiPage.patchRequest()
})

Then("the response should contain the following updated job {string} in the list",(jobTitle)=>{
    patchApiPage.verifyJobTitleFromResponse(jobTitle)
})
    
