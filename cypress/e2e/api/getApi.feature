Feature: Rest API GET Endpoint Functionality Scenarios

Scenario Outline: GET new user data
Given Get Call to "<url>"
Then Response Code "<responseMessage>" is validated

  Examples:
      | url                                                   |   responseMessage |
      | https://reqres.in/api/users?page=2   | 200               |
      | https://reqres.in/api/users/2                         | 200             |
      | https://reqres.in/api/users/23      | 404             |
      | https://reqres.in/api/unknown/23    | 404             |


Scenario Outline:  Verify Code
    Given Get Call to "<url>"
   Then Response Data Should Contain  "<first_name>"

    Examples:
      |         url         |   first_name |
      |   https://reqres.in/api/users?page=2 |  Lindsay     |
      

