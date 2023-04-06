import { When } from 'cypress-cucumber-preprocessor/steps';
import * as TicTac from '../../pageObjects/index';

When('The logo is loaded', () => {
  TicTac.mainMenuView.assertLogoIsPresent();
});

When('I navigate to {string}', direction => {
  TicTac.mainMenuView.navigate(direction);
});

When('I select Start New Game', () => {
  TicTac.mainMenuView.selectStartGame();
});
