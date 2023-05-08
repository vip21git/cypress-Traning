
import { Given, When } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../PageObjectModel/loginPage"          //page object model- import class loginpage

const ln = new loginPage()

Given("User redirects to application", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})


When("User enter {string} and {string}", (username,password)=>{
    cy.wait(3000)
    //const ln = new loginPage()
    ln.setUserName;                                
    ln.setPassword;
    // cy.get('input[name="username"]').should('be.visible').type(username)
    // cy.get('input[name="password"]').should('be.visible').type(password)
})
And("User click on Login Button", ()=>{
   // cy.get('button[type="submit"]').should('be.visible').click()
      // const ln = new loginPage()
       ln.clickSubmit();
       
})

Then("User able to login successfully", ()=>{
    //cy.get('span[class="oxd-topbar-header-breadcrumb"]').should('have.text', 'Dashboard' )

      //const ln = new loginPage()
      ln.verifyLogin();
})
Then("User should be not able to login", ()=>{
    cy.get('.oxd-alert-content--error').should('have.text', 'Invalid credentials' )
})
