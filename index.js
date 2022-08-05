/* Require */
const { fetchBreedDescription } = require(`./breedFetcher`);
/* Tcp:Http */
/* Arguments */
const args = process.argv.slice(2);

/* Export Functions */
/* Local Functions */
const outputToConsole = (error, description) => {
  if (error) console.log(error);
  else console.log(error);
};

/* Execution & Test Data */
// if argument lengths are not correct, send back this error notice
// otherwise move onto the next phase
if (args.length !== 1) fetchBreedDescription(`ARGS!`, outputToConsole);
else fetchBreedDescription(args[0], outputToConsole);

/* Exports */