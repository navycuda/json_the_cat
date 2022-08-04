/* Required */
const request = require(`request`);

/* Arguments */
const args = process.argv.slice(2);
const SearchKey = args[0];

/* Tcp:Http */
const Url = `https://api.thecatapi.com/v1/breeds/search`;

/* Functions */
const exitApp = (exitMessage) => {
  console.log(exitMessage);
  process.exit();
};

/* Execution */
// Check and make sure there is only one argument
if (args.length !== 1) exitApp(`Incorrect argument format.\n  $> node breedFetcher.js siamese`);
// Query the api with the presented search key
request(`${Url}?q=${SearchKey}`, (error, response, body) => {
  if (error) exitApp(error);
  const kitty = JSON.parse(body)[0];
  if (!kitty) exitApp(`Breed '${SearchKey}' not found.`);
  console.log(kitty.description);
});