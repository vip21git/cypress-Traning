import postApiPage from "../../pageObject/api/postApiPage";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("POST Method to create user", () => {
    postApiPage.postRequest()
})

Then("Verify that repsonse should have {string} in the list", (expectedEmail) => {
    postApiPage.verifyEmailInResponse(expectedEmail)
})