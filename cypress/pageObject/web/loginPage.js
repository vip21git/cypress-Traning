export default{
    userName : 'input[name="username"]',
    userPassword : 'input[name="password"]',
    loginButton : 'button[type="submit"]',
    dashboardHeader : 'span[class="oxd-topbar-header-breadcrumb"]',
    errorMessage : '.oxd-alert-content--error',

    navigateToUrl(){
       cy.visit(Cypress.config('baseUrl'))
    },

    enterUserDetails(userId, userPass){
        cy.get(this.userName).should('be.visible').type(userId)
        cy.get(this.userPassword).should('be.visible').type(userPass)
            },

    clickOnLoginButton(){
        cy.get(this.loginButton).should('be.visible').click()
    },

    verifySuccessfullLogin(){
        cy.get(this.dashboardHeader).should('have.text', 'Dashboard')
    },

    verifyUnsuccessfullLogin(){
        cy.get(this.errorMessage).should('have.text', 'Invalid credentials')
    },
}
