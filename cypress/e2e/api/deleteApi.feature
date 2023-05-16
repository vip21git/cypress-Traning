Feature: Rest API DELETE Endpoint Functionality Scenarios

 Scenario Outline: Delete a new user with valid data

    Given the user is on the Home page of Website for Delete API
    Then the response should not contain the following updated "<name>" in the list
    Examples:
      | name                |
      | Janet               |










#
