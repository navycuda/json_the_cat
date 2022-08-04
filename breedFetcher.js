/* Required */
const request = require(`request`);
const tools = require(`./tools`);

/* Arguments */
/* Tcp:Http */
const Url = `https://api.thecatapi.com/v1/breeds/search`;

/* Functions */
const fetchBreedDescription = (breedname, callback) => {
  // Well Spock?! Do Something!



  
  // Query the api with the presented search key
  request(`${Url}?q=${breedname}`, (error, response, body) => {
    if (error) tools.exitApp(error);
    const kitty = JSON.parse(body)[0];
    if (!kitty) tools.exitApp(`Breed '${breedname}' not found.`);
    callback(kitty.description);
  });
};

/* Execution */
/* Exports */
module.exports = fetchBreedDescription;