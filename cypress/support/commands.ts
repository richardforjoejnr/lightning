import MainMenuView from './pageObjects/MainMenuView';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('navigateMenu', (menu) => {

    // TODO - Logic to navigate to a menu based on the current position
    
    const mainMenuScreen = MainMenuView.getInstance();
    
    let navigateToPosition = 0;
    const numberOfMenuItems = 4;

  const currentMenu = mainMenuScreen._getCurrentMenuItem
  const currentMenuPosition: number = mainMenuScreen._getMenuItemPosition(currentMenu);
  const navigateToMenuPosition: number = mainMenuScreen._getMenuItemPosition(menu);
  cy.log("TEST", currentMenuPosition, navigateToMenuPosition)
//     switch(menu) {
//       case "Start New Game": 
//         if (currentPosition === 1) {

//         }
//         cy.get('body').type('{uparrow}')
//         break;
//       case "down":
//         cy.get('body').type('{downarrow}')
//         break;
//       case "left":
//         cy.get('body').type('{leftarrow}')
//         break;
//       case "right":
//         cy.get('body').type('{righarrow}')
//         break;  
//   }

    


    switch (true) {

        case currentMenuPosition === 1: {
            cy.log('Start New Game:', currentMenuPosition);


            if (navigateToMenuPosition > 1) {
                const count = navigateToMenuPosition - 1
                cy.log('Navigate down ' + count + 'times');
                for (let step = 1; step <= count; step++) {
                    cy.get('body').type('{downarrow}')
                  }
            }

            break;
        }
        case ((currentMenuPosition >= 2) && (currentMenuPosition <= (numberOfMenuItems))): {

            if (currentMenuPosition === navigateToMenuPosition) {
                cy.log(' Do nothing');
            } else if (currentMenuPosition > navigateToMenuPosition) {
                const count = currentMenuPosition - navigateToMenuPosition
                cy.log('Navigate up ' + count + 'times');
                for (let step = 1; step <= count; step++) {
                    cy.get('body').type('{up}')
                  }

            } else if (currentMenuPosition < navigateToMenuPosition) {
                const count = navigateToMenuPosition - currentMenuPosition;
                cy.log('Navigate down ' + count + 'times');
                for (let step = 1; step <= count; step++) {
                    cy.get('body').type('{down}')
                  }
            }
            break;
        }
        case currentMenuPosition === numberOfMenuItems: {

            if (currentMenuPosition === numberOfMenuItems) {
            } else if (currentMenuPosition < numberOfMenuItems) {
                const count = numberOfMenuItems - currentMenuPosition;
                cy.log('Navigate down ' + count + 'times');
                for (let step = 1; step <= count; step++) {
                    cy.get('body').type('{down}')
                  }
            }
            break;
        }
        }
})
