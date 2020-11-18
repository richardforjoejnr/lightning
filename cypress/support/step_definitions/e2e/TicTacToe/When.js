import { When } from "cypress-cucumber-preprocessor/steps";
import MainMenuView from './../../../page_objects/e2e/MainMenuView';

When(`The logo is loaded`, () => {
    MainMenuView.assertLogoIsPresent();
  })

 When(`I navigate {string}`, (direction) => {
    MainMenuView.navigate(direction);
  })
  