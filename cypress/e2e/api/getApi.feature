Feature: GET API Endpoint Functionality

Scenario Outline: Verification of status code

Given GET Method to send request for "<url>"
Then Verify "<statusCode>" of API
Examples:
      | url                                | statusCode |
      | https://reqres.in/api/users?page=2 | 200        |
      | https://reqres.in/api/users/2      | 200        |
      | https://reqres.in/api/users/23     | 404        |
      | https://reqres.in/api/unknown/23   | 404        |

Scenario Outline:  Verification of fetching user name via api
Given GET Method to send request for "<url>"
Then Verify "<first_name>" in the response 
Examples:
      | url                                | first_name |
      | https://reqres.in/api/users?page=2 | Lindsay    |
      | https://reqres.in/api/users?page=2 | Test       |
