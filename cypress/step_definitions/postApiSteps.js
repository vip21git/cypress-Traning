import postApiPage from "../pageObject/postApiPage";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is on the Home page", () => {
    postApiPage.postRequest()
})

Then("the response should contain the following {string} in the list", (expectedEmail) => {
    postApiPage.verifyEmailInResponse(expectedEmail)
})