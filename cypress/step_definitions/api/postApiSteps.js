import postApiPage from "../../pageObject/postApiPage";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("POST API Method to create user", () => {
    postApiPage.postRequest()
})

Then("Verify the repsonse should have {string} in the list", (expectedEmail) => {
    postApiPage.verifyEmailInResponse(expectedEmail)
})