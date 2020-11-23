const cypress = require('cypress');
const yargs = require('yargs');


// https://filiphric.com/test-grepping-in-cypress

const { grep } = yargs
  .option('grep', {
    type: 'array',
    default: ['*']
  }).argv;

  cypress.run({
  spec: grep.map(folder => `./cypress/integration/${folder}/*.*`),
});
