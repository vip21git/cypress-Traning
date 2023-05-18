Feature: PATCH API Endpoint Functionality

Scenario Outline: Verification of updated job title in the list

Given PATCH Method to update job Titles
Then Verify "<job>" title is updated in the list

Examples:
      | job              |
      | QaTester         |
      | QaTester1        |
      | QaTester2        |
      | QaTester3        |
      | QaTester4        |
      | QaTester5        |
      | QaTester6        |
      | QaTester7        |
      | QaTester8        |
      
      
