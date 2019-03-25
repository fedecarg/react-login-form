Feature: As a registered user
  I want to be able to sign in
  So that I can access my account

  Background:
    Given I am at "Sign In" page

  Scenario: Valid sign in credentials
    When I enter email and password
    And I submit "sign in" request
    And I should be signed in