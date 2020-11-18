import { When } from "cypress-cucumber-preprocessor/steps";
import MainMenuView from './../../../page_objects/e2e/MainMenuView';

When(`The logo is loaded`, () => {
    const mainMenuScreen = MainMenuView.getInstance();
    mainMenuScreen.assertLogoIsPresent();
  })

 When(`I navigate {string}`, (direction) => {
    const mainMenuScreen = MainMenuView.getInstance();
    mainMenuScreen.navigate(direction);
  })
  