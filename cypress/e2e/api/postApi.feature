Feature:POST API Endpoint Functionality

Scenario Outline: Verification of creating user via api

Given POST Method to create user
Then Verify that repsonse should have "<email>" in the list

Examples:
      | email               |
      | eve.holt@reqres.in  |
      | eve1.holt@reqres.in |
      | eve2.holt@reqres.in |
      | eve3.holt@reqres.in |
      | eve4.holt@reqres.in |
      | eve5.holt@reqres.in |
      | eve6.holt@reqres.in |











