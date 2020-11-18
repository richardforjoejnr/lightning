

const SCOREBOARD_ITEMS = 'div[ref="ScoreBoard"] div'
const PLAYER_SCORE_COMPONENT = 'div[ref="Player"]'
const GAME_COMPONENT = 'div[ref="Game"]'
const PLAYER_POSITION = 'div[ref="PlayerPosition"]'
const LOGO_COMPONENT = 'div[ref=Logo]:visible'
const APP_VERSION_COMPONENT = 'div[ref=Text]:visible'

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

  play()
  {
    cy.get(BODY).type('{enter}')
  }


  // GETTERS

  getCurrentPlayerPosition()
  {
    cy.get(PLAYER_POSITION).invoke('attr', 'y')
  }


  // ASSERTIONS

  assertTitleText(text)
{
    return cy.get(LOGO_COMPONENT).invoke('attr', 'texture-text').should('contain', `${text}`)
}

assertTheAppVersion(text)
{
    return cy.get(APP_VERSION_COMPONENT).invoke('attr', 'texture-text').should('contain', `${text}`)
}

assertGameIsPresent()
{
  cy.get(GAME_COMPONENT).should('exist');
}

assertScoreIsPresent()
{
  cy.get(SCOREBOARD_ITEMS).should('exist');
}

}

export default GameView;
