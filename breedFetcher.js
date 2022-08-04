/* Required */
const request = require(`request`);
const args = process.argv.slice(2);
if (args.length === 0) process.exit();

/* Tcp:Http */
const Url = `https://api.thecatapi.com/v1/breeds/search`;
const SearchKey = `?q=${args[0]}`;

/* Functions */
const deserializeJson = (json) => {
  
};

/* Execution */
request(Url + SearchKey, (error, response, body) => {
  console.log(`error:`, error);
  console.log(`statusCode:`, response && response.statusCode);
  console.log(`body type`, typeof body);
  console.log(`body:`, body);
});