import putApiPage from "../../pageObject/api/putApiPage";
import { Given,Then } from "cypress-cucumber-preprocessor/steps";


Given("PUT Method to update user name",()=>{
    putApiPage.putRequest()
})

Then("Verify {string} should be updated in the list",(username)=>{
    putApiPage.verifyUserNameInResponse(username)
})