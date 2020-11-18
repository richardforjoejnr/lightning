Feature: The TicTacToe Game

  I want to play the TicTacToe game

  
Scenario: Start the game
    Given I launch the game
    When The logo is loaded
    Then I see "TicTacToe" in the page title
    And The version of the app is "v1.0.0"

Scenario: "Start New Game" is the default item
     Given I launch the game
    When The logo is loaded
    Then "Start New Game" is in focus

Scenario: Selecting "Continue" from the Menu
     Given I launch the game
    When I navigate "down"
    Then "Continue" is in focus   

Scenario: There should be 4 items in the Menu
     Given I launch the game
    When The logo is loaded
    Then There are "4" items in the Menu 