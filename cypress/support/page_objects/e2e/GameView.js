

const SCOREBOARD_ITEMS = 'div[ref="ScoreBoard"] div'
const PLAYER_SCORE_COMPONENT = 'div[ref="Player"]'
const MENU_COMPONENT = 'div[ref=Items]'
const FOCUS_INDICATOR_COMPONENT = 'div[ref=FocusIndicator]:visible'
const APP_VERSION_COMPONENT = 'div[ref=Text]:visible'
const MENU_ITEMS = 'div[type=Item]'

const BODY = 'body'
 
// document.querySelector("div[ref=Logo]").getAttribute('texture-text')

class GameView {
    static instance;
  

  constructor() {
    // constructor

}

static getInstance() {
  if (this.instance) {
      return this.instance;
  } else {
      return new GameView();;
  }
}

// Actions

  navigate(direction)
  {
    cy.wait(5000)
    switch(direction) {
      case "up":
        cy.get(BODY).type('{uparrow}')
        break;
      case "down":
        cy.get(BODY).type('{downarrow}')
        break;
      case "left":
        cy.get(BODY).type('{leftarrow}')
        break;
      case "right":
        cy.get(BODY).type('{righarrow}')
        break;  
  }
  }

  static select()
  {
    cy.get(BODY).type('{enter}')
  }

  // Play

  // GETTERS

// Get available boxes

  // ASSERTIONS



}

export default GameView;
