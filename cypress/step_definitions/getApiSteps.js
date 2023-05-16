import getApiPage from "../pageObject/getApiPage";
import { Given } from "cypress-cucumber-preprocessor/steps";

Given("Get Call to {string}", (url)=>{
    getApiPage.getRequest(url)
})

Then("Response Code {string} is validated", (responseMessage)=>{
    getApiPage.verifyResponseofGetRequest(responseMessage)
})

Then("Response Data Should Contain  {string}",(firstname)=>{
    getApiPage.verifyUsernameInResponse(firstname)
})