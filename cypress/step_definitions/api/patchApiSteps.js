import patchApiPage from "../../pageObject/api/patchApiPage";
import { Given,Then } from "cypress-cucumber-preprocessor/steps";

Given("PATCH Method to update job Titles",()=>{
    patchApiPage.patchRequest()
})

Then("Verify {string} title is updated in the list",(jobTitle)=>{
    patchApiPage.verifyJobTitleFromResponse(jobTitle)
})
    
