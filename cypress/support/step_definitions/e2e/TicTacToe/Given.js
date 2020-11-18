import { Given } from "cypress-cucumber-preprocessor/steps";
import MainMenuView from './../../../page_objects/e2e/MainMenuView';

Given('I launch the game', () => {
  MainMenuView.launchApp();
  MainMenuView.assertTitleText('TicTacToe')
})

