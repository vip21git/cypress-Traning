const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    baseUrl : "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/**/*.feature",
   
  },
  
});
