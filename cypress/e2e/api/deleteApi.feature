Feature:DELETE API Endpoint Functionality Scenarios

Scenario Outline: Verification for deleting user via API

Given DELETE Method API to Delete User
Then Verify the "<name>" should not be present in the updated list

Examples:
      | name  |
      | Janet |
