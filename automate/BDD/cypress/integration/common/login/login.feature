Feature: Login to Application

    As a valid user
    I want to login into application

    Scenario: Valid Login
        Given I open Login page
        When I submit Login
        Then I should see homepage