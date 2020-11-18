import { Then, And } from "cypress-cucumber-preprocessor/steps";
import MainMenuView from './../../../page_objects/e2e/MainMenuView';

Then(`I see {string} in the page title`, (title) => {
  MainMenuView.assertTitleText(title);
})

Then(`{string} is in focus`, (MenuItem) => {
  MainMenuView.assertFocusIndicator(MenuItem);
})
And(`The version of the app is {string}`, (version) => {
  MainMenuView.assertTheAppVersion(version)
})

Then(`There are {string} items in the Menu`, (Items) => {
  MainMenuView.assertNoOfMenuItems(Items);
})

 
