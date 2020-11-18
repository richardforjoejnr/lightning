const {
  Before,
  After
} = require("cypress-cucumber-preprocessor/steps");

Before(() => {
  cy.log("BEFORE ALL TESTS")
});


After(() => {
  cy.log("AFTER ALL TESTS")
  // cy.reload(true)
});

// this will only get called before scenarios tagged with @foo
Before({ tags: "@foo" }, () => {
  cy.log("BEFORE SCENARIOS TAGGED WITH @FOO")
});
