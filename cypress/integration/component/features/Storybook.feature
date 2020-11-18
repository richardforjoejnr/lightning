Feature: The Story book

  I want to open a storybook page for my components

  
  Scenario: Opening a storybook page
    Given I open a storybook page

  
  Scenario: Type a title on the storybook page
    Given I open a storybook page
    Then I see "Q UI Title" in the title

  
  Scenario: Type a sub title on the storybook page
    Given I open a storybook page
    Then I see "Q UI Sub title" in the sub title

