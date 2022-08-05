/* Require */
const request = require(`request`);

/* Tcp:Http */
const ApiUrl = `https://api.thecatapi.com/v1/breeds/search?q=`;


/* Arguments */
/* Export Functions */
const fetchBreedDescription = (breed, callback) => {
  request(ApiUrl, (error, response, body) => {








    
    callback(`error`, `description`);
  });
};

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = { fetchBreedDescription };