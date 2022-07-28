Feature: Search in the web

    As a guest
    I want to Search in the web

    Scenario: Valid Search
        Given I open Search page
        When I type text and submit
        Then I should see Search result