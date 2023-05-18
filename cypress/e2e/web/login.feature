Feature: Login Functionality

Scenario Outline: User login to application with valid credentials
Given User redirects to application
When User "<user_name>" and "<password>" credentials to Login
And User click on Login Button
Then User should be able to login successfully
Examples:
    |user_name  | password  |
    |Admin      | admin123  |

    

Scenario Outline: User login to application with invalid credentials
Given User redirects to application
When User "<user_name>" and "<password>" credentials to Login
And User click on Login Button
Then User should not be able to login
Examples:
    |user_name      | password  |
    |Admin          | admin1234 |
    |user_name      | admin123  |