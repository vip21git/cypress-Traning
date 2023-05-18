export default{
    signOutButton : 'span[class="oxd-userdropdown-tab"]',
    middelNameField: 'input[name="middleName"]',
    toastMessage: '[id="oxd-toaster_1"]',

    signOut(){
        cy.get(this.signOutButton).should('be.visible').click()
    },

    updateDetails(){
        cy.get(this.middelNameField).should('be.visible').clear().type('Lorem')
        cy.scrollTo('bottom')
        cy.contains('Save').first().should('be.visible').click()
    },
    
    verifyToastMessage(){
        cy.get(this.toastMessage).contains('Successfully')
    }
}
