npm init
npm install cypress
npm i -D  cypress-cucumber-preprocessor
npm install --save-dev cypress-cucumber-preprocessor
Run :
npx cypress open to generate the cypress folder
create folder "integration/e2e"

Add this in cypress.config.js file :- 
    const cucumber = require('cypress-cucumber-preprocessor').default
    const { defineConfig } = require("cypress");

        module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});


Add this to package.json  outside the devDependencies
"cypress-cucumber-preprocessor":{
    "step_definitions": "cypress/step_definitions"
  }


Command to create allure report - 
npx cypress run --spec "cypress/integration/.js" --env allure=true,allureResultsPath=cypress/allure-results

to server allure report - 
allure serve cypress\allure-results    


