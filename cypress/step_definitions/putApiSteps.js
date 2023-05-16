import putApiPage from "../pageObject/putApiPage";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";


Given("the user is on the Home page of Website",()=>{
    putApiPage.putRequest()
})

Then("the response should contain the following updated {string} in the list",(username)=>{
    putApiPage.verifyUserName(username)
})