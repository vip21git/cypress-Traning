Feature: SignIn into OHRM

Scenario: User login to application with valid credentials
Given User redirects to application
When User enter "Admin" and "admin123"
And User click on Login Button
Then User able to login successfully

Scenario: User login to application with invalid credentials
Given User redirects to application
When User enter "User" and "123admin"
And User click on Login Button
Then User should be not able to login
