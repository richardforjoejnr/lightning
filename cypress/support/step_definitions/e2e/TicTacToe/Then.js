import { Then, And } from "cypress-cucumber-preprocessor/steps";
import MainMenuView from './../../../page_objects/e2e/MainMenuView';
import GameView from './../../../page_objects/e2e/GameView';

Then(`I see {string} in the page title`, (title) => {
  const mainMenuScreen = MainMenuView.getInstance();
  mainMenuScreen.assertTitleText(title);
})

Then(`{string} is in focus`, (MenuItem) => {
  const mainMenuScreen = MainMenuView.getInstance();
  mainMenuScreen.assertFocusIndicator(MenuItem);
})
And(`The version of the app is {string}`, (version) => {
  const mainMenuScreen = MainMenuView.getInstance();
  mainMenuScreen.assertTheAppVersion(version)
})

Then(`There are {string} items in the Menu`, (Items) => {
  const mainMenuScreen = MainMenuView.getInstance();
  mainMenuScreen.assertNoOfMenuItems(Items);
})

Then(`The game is launched`, () => {
  const gameScreen = GameView.getInstance();
  gameScreen.assertTitleText("TicTacToe")
  gameScreen.assertScoreIsPresent()
  gameScreen.assertGameIsPresent()
})

 
