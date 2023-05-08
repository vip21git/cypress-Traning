import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";

Given("precondition" , ()=>{
     cy.visit("https://demo.guru99.com/test/newtours/")

  })

  When("action", ()=>{
     cy.Title().should('eq','Welcome: Mercury Tours')

  })


  Then("testable outcome", ()=>{
      cy.Title().should('eq','Welcome: Mercury Tours')
  })