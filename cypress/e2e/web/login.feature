Feature: Login Functionality

Scenario: User login to application with valid credentials
Given User redirects to application
When User enter credentials to Login
    |user_name  | password  |
    |Admin      | admin123  |
And User click on Login Button
Then User should be able to login successfully

Scenario: User login to application with invalid credentials
Given User redirects to application
When User enter credentials to Login
    |user_name  | password  |
    |Admin      | admin1234  |
And User click on Login Button
Then User should not be able to login
