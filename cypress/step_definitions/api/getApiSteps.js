import getApiPage from "../../pageObject/api/getApiPage"
import { Given,Then } from "cypress-cucumber-preprocessor/steps";

Given("GET Method to send request for {string}", (url)=>{
    getApiPage.getRequest(url)
})

Then("Verify {string} of API", (statusCode)=>{
    getApiPage.verifyResponseofGetRequest(statusCode)
})

Then("Verify {string} in the response",(firstname)=>{
    getApiPage.verifyUsernameInResponse(firstname)
})