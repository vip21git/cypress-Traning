Feature: Functionality to apply for leave 

Scenario: User login into application and apply for leave
Given User redirects to application
When User enter credentials to Login
    |user_name  | password  |
    |Admin      | admin123  |
And User click on Login Button
And User click on My Info
And User edit the personal application details
Then Verify details updated successfully

