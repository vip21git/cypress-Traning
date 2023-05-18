Feature: Leave feature for dashboard

Scenario Outline: User should be able to apply for leave successfully
Given User redirects to application
When User "<user_name>" and "<password>" credentials to Login
And User click on Login Button
And User click on My Info
And User edit the personal application details
Then Verify details updated successfully

Examples:
    |user_name  | password  |
    |Admin      | admin123  |
