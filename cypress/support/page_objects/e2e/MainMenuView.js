
const APP_URL = 'http://127.0.0.1:8081/'

const LOGO_COMPONENT = 'div[ref=Logo]:visible'
const MENU_COMPONENT = 'div[ref=Items]'
const FOCUS_INDICATOR_COMPONENT = 'div[ref=FocusIndicator]:visible'
const APP_VERSION_COMPONENT = 'div[ref=Text]:visible'
const MENU_ITEMS = 'div[type=Item]'

const BODY = 'body'
 
// document.querySelector("div[ref=Logo]").getAttribute('texture-text')

class MainMenuView {

  // Actions

  static launchApp()
  {
    cy.visit(APP_URL)
    
  }
  
  static navigate(direction)
  {
    cy.wait(5000)
    switch(direction) {
      case "up":
        cy.get(BODY).type('{uparrow}')
        break;
      case "down":
        cy.get(BODY).type('{downarrow}')
        break;

  }
  }

  static select()
  {
    cy.get(BODY).type('{enter}')
  }

  // GETTERS
  static getMenuItems(Menu)
  {
    cy.get(MENU_ITEMS).find(`[texture-text="${Menu.toUpperCase()}"]`)
  }


  // ASSERTIONS
  static assertLogoIsPresent()
  {
    cy.get(LOGO_COMPONENT).should('exist');
  }

  static assertTitleText(text)
{
    return cy.get(LOGO_COMPONENT).invoke('attr', 'texture-text').should('contain', `${text}`)
}

static assertTheAppVersion(text)
{
    return cy.get(APP_VERSION_COMPONENT).invoke('attr', 'texture-text').should('contain', `${text}`)
}

static assertNoOfMenuItems(ItemsNumber)
{
    return cy.get(MENU_ITEMS).should('have.length',parseInt(ItemsNumber))
}

static assertFocusIndicator(MenuItem)
{
  let focus;
  switch(MenuItem) {
    case "Start New Game":
      focus = "5"
      break;
    case "Continue":
      focus = "95"
      break;
    case "About":
      focus = "185"
      break;

    case "Exit":
      focus = "275"
      break;
  }
    return cy.get(FOCUS_INDICATOR_COMPONENT).invoke('attr', 'y').should('eq', `${focus}`)
}

}

export default MainMenuView;
