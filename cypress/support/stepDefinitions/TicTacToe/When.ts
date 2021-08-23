import { When } from "cypress-cucumber-preprocessor/steps";
import MainMenuView from '../../pageObjects/MainMenuView';

When(`The logo is loaded`, () => {
    const mainMenuScreen = MainMenuView.getInstance();
    mainMenuScreen.assertLogoIsPresent();
  })

 When(`I navigate to {string}`, (direction) => {
    const mainMenuScreen = MainMenuView.getInstance();
    mainMenuScreen.navigate(direction);
  })
  
  When(`I select Start New Game`, () => {
    const mainMenuScreen = MainMenuView.getInstance();
    mainMenuScreen.selectStartGame();
  })
  