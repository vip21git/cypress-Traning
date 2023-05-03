export default{
    userName : 'input[name="username"]',
    userPassword : 'input[name="password"]',
    loginbtn : 'button[type="submit"]',
    dashBoardHeader : 'span[class="oxd-topbar-header-breadcrumb"]',
    errorMessage : '.oxd-alert-content--error',

    navigateToUrl(){
       cy.visit('/')
    },

    enterUserDetails(userId, userPass){
        cy.get(this.userName).should('be.visible').type(userId)
        cy.get(this.userPassword).should('be.visible').type(userPass)
            },

    clickLoginBtn(){
        cy.get(this.loginbtn).should('be.visible').click()
    },

    verifySuccessfullLogin(){
        cy.get(this.dashBoardHeader).should('have.text', 'Dashboard')
    },

    verifyUnsuccessfullLogin(){
        cy.get(this.errorMessage).should('have.text', 'Invalid credentials')
    },
}
