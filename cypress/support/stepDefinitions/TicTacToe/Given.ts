import { Given } from 'cypress-cucumber-preprocessor/steps';
import * as TicTac from '../../pageObjects/index';

Given('I launch the game', () => {
  TicTac.mainMenuView.launchApp();
  TicTac.mainMenuView.assertTitleText('TicTacToe');
});
