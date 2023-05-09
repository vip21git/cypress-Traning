/// <reference types="@shelex/cypress-allure-plugin" />
const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      allureWriter(on, config);
        return config;
    },
    baseUrl : "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/**/*.feature",
   
  },
  
});
