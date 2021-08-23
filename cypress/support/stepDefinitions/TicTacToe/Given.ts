import { Given } from "cypress-cucumber-preprocessor/steps";
import MainMenuView from '../../pageObjects/MainMenuView';

Given('I launch the game', () => {
  const mainMenuScreen = MainMenuView.getInstance();
  mainMenuScreen.launchApp();
  mainMenuScreen.assertTitleText('TicTacToe')
})

