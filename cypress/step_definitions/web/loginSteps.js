import loginPage from '../../pageObject/loginPage'
import { Given, When } from "cypress-cucumber-preprocessor/steps";

//Added POM

Given("User redirects to application", ()=>{
    loginPage.navigateToUrl()
})

When("User enter credentials to Login", (datatable)=>{
    datatable.hashes().forEach((element) => {
    loginPage.enterUserDetails(element.user_name,element.password)
});

})

And("User click on Login Button", ()=>{
   loginPage.clickLoginBtn()
})

Then("User should be able to login successfully", ()=>{
    loginPage.verifySuccessfullLogin()
})
Then("User should not be able to login", ()=>{
    loginPage.verifyUnsuccessfullLogin()
})

