Feature:DELETE API Endpoint Functionality

Scenario Outline: Verification for deleting user via API

Given DELETE Method to Delete User
Then Verify the "<name>" should not be present in the updated list

Examples:
      | name  |
      | Janet |
