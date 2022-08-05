/* Require */
const request = require(`request`);

/* Tcp:Http */
const ApiUrl = `https://api.thecatapi.com/v1/breeds/search?q=`;


/* Arguments */
/* Export Functions */
const fetchBreedDescription = (breed, callback) => {
  if (breed === `ARGS!`) {
    callback(`Invalid cli arguments\n  $> node index.js siamese`);
  } else {
    request(ApiUrl + breed, (error, response, body) => {
      console.log(`body: `, body);
      if (error || body === `[]`) {
        // figure out what kind of error it is and lable as such
        callback(`Search for breed '${breed}' returned no results`);
      } else {
        const kitty = JSON.parse(body)[0];
        callback(error, `kitty.description`);
      }
    });
  }
};

/* Local Functions */
/* Execution & Test Data */
/* Exports */
module.exports = { fetchBreedDescription };