/* Require */
const fetchBreedDescription = require(`./breedFetcher`);
const tools = require(`./tools`);

/* Tcp:Http */
/* Arguments */
const args = process.argv.slice(2);
const SearchKey = args[0];

/* Export Functions */
/* Local Functions */
const outputToConsole = (error, value) => {
  if (!error) console.log(value);
  else console.log(`error! `, error);
};

/* Execution & Test Data */
// Check and make sure there is only one argument
if (args.length !== 1) tools.exitApp(`Incorrect argument format.\n  $> node index.js siamese`);

fetchBreedDescription(SearchKey, outputToConsole);

/* Exports */