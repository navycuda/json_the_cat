/* Required */
const request = require(`request`);
const args = process.argv.slice(2);

/* Tcp:Http */
const Url = `https://api.thecatapi.com/v1/breeds/search`;
const SearchKey = args[0];

/* Functions */
const deserializeJson = (json) => {
  return JSON.parse(json)[0];
};
const exitApp = (exitMessage) => {
  console.log(exitMessage);
  process.exit();
};

/* Execution */
// Check and make sure there is only one argument
if (args.length !== 1) exitApp(`No search key provided. exiting.`);
// Query the api with the presented search key
request(`${Url}?q=${SearchKey}`, (error, response, body) => {
  if (error) exitApp(error);
  const kitty = JSON.parse(body)[0];
  if (!kitty) exitApp(`Breed '${SearchKey}' not found.`);
  console.log(kitty.description);
});