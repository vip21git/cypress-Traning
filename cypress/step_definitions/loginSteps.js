import loginPage from '../pageObject/loginPage'
import { Given, When } from "cypress-cucumber-preprocessor/steps";

//Added POM

Given("User redirects to application", ()=>{
    loginPage.navigateToUrl()
})

When("User enter {string} and {string}", (username,password)=>{
    loginPage.enterUserDetails(username,password)
})

And("User click on Login Button", ()=>{
   loginPage.clickLoginBtn()
})

Then("User able to login successfully", ()=>{
    loginPage.verifySuccessfullLogin()
})
Then("User should be not able to login", ()=>{
    loginPage.verifyUnsuccessfullLogin()
})