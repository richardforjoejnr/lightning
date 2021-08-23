/// <reference types="cypress" />

import GameView from './GameView';

const APP_URL = 'http://127.0.0.1:8080/'

const LOGO_COMPONENT = 'div[ref=Logo]:visible'
const MENU_COMPONENT = 'div[ref=Items]'
const FOCUS_INDICATOR_COMPONENT = 'div[ref=FocusIndicator]:visible'
const APP_VERSION_COMPONENT = 'div[ref=Text]:visible'
const MENU_ITEMS = 'div[type=Item]'

const BODY = 'body'
 
// document.querySelector("div[ref=Logo]").getAttribute('texture-text')

class MainMenuView {

  static instance: MainMenuView;
  private currentMenuName: string

  static getInstance() {
    if (this.instance) {
        return this.instance;
    } else {
        return new MainMenuView();;
    }
}

  // Actions

  launchApp()
  {
    cy.visit(APP_URL)
    this._setCurrentMenuItem('Start New Game')
    
  }


  // Actions

  
  navigate(direction: string)
  {
    cy.wait(5000)
    cy.log(direction)
    // cy.navigateMenu(direction); TODO

    switch(direction) {
      case "Start New Game":
        break;
      case "Continue":
        cy.get(BODY).type('{downarrow}')
        break;
      case "About":
        cy.get(BODY).type('{downarrow}')
        cy.get(BODY).type('{downarrow}')
        break;
  }
  }

  select()
  {
    cy.get(BODY).type('{enter}')
  }

  dismiss()
  {
    cy.get(BODY).type('{backspace}')
  }

  selectStartGame()
  {
    cy.wait(5000)
    cy.navigateMenu("Start New Game")
    cy.get(BODY).type('{enter}')
    return new GameView();
  } 

  // GETTERS
  getMenuItems(Menu: string)
  {
    cy.get(MENU_ITEMS).find(`[texture-text="${Menu.toUpperCase()}"]`)
  }

  _getCurrentMenuItem()
  {
  return this.currentMenuName;
  }

  _getMenuItemPosition(menu){
    switch(menu) {
      case "Start New Game": 
        return 1
      case "Continue":
        return 2
      case "About":
        return 3
      case "Exit":
        return 4
  }
  }
  // SETTERS

  _setCurrentMenuItem(menu:string)
  {
    return this.currentMenuName = menu;
  }
  // ASSERTIONS
  assertLogoIsPresent()
  {
    cy.get(LOGO_COMPONENT).should('exist');
  }

  assertTitleText(text: string)
{
    return cy.get(LOGO_COMPONENT).invoke('attr', 'texture-text').should('contain', `${text}`)
}

assertTheAppVersion(text: string)
{
    return cy.get(APP_VERSION_COMPONENT).invoke('attr', 'texture-text').should('contain', `${text}`)
}

assertNoOfMenuItems(ItemsNumber: string)
{
    return cy.get(MENU_ITEMS).should('have.length',parseInt(ItemsNumber))
}

assertFocusIndicator(MenuItem: string)
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
