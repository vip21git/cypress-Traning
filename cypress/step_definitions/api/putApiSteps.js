import putApiPage from "../../pageObject/putApiPage";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";


Given("PUT API Method to update user name",()=>{
    putApiPage.putRequest()
})

Then("Verify {string} should be updated in the list",(username)=>{
    putApiPage.verifyUserName(username)
})