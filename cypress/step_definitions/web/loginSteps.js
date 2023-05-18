import loginPage from '../../pageObject/web/loginPage'
import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

Given("User redirects to application", ()=>{
    loginPage.navigateToUrl()
})

When("User {string} and {string} credentials to Login", (user_name,password)=>{
    loginPage.enterUserDetails(user_name,password)
})

And("User click on Login Button", ()=>{
   loginPage.clickOnLoginButton()
})

Then("User should be able to login successfully", ()=>{
    loginPage.verifySuccessfullLogin()
})
Then("User should not be able to login", ()=>{
    loginPage.verifyUnsuccessfullLogin()
})

