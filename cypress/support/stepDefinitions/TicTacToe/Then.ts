import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import * as TicTac from '../../pageObjects/index';

Then('I see {string} in the page title', title => {
  TicTac.mainMenuView.assertTitleText(title);
});

Then('{string} is in focus', MenuItem => {
  TicTac.mainMenuView.assertFocusIndicator(MenuItem);
});
And('The version of the app is {string}', version => {
  TicTac.mainMenuView.assertTheAppVersion(version);
});

Then('There are {string} items in the Menu', Items => {
  TicTac.mainMenuView.assertNoOfMenuItems(Items);
});

Then('The game is launched', () => {
  TicTac.gameView.assertTitleText('TicTacToe');
  TicTac.gameView.assertScoreIsPresent();
  TicTac.gameView.assertGameIsPresent();
});
