/* Required */
const request = require(`request`);
const args = process.argv.slice(2);
if (args.length === 0) process.exit();

/* Tcp:Http */
const Url = `https://api.thecatapi.com/v1/breeds/search`;
const SearchKey = `?q=${args[0]}`;

/* Functions */
const deserializeJson = (json) => {
  return JSON.parse(json)[0];
};
const exitApp = (exitMessage) => {
  process.exit();
};

/* Execution */
request(Url + SearchKey, (error, response, body) => {
  if (error) exitApp(error);
  const kitty = deserializeJson(body);
  console.log(kitty);
});