Feature: PUT API Endpoint Functionality

Scenario Outline: Verification for updating the user data

Given PUT Method to update user name
Then Verify "<name>" should be updated in the list
   
    Examples:
      | name                |
      | NewUserName         |
      | NewUserName1        |
      | NewUserName2        |
      | NewUserName3        |
      | NewUserName4        |
      | NewUserName5        |
      | NewUserName6        |
      | NewUserName7        |
      

















