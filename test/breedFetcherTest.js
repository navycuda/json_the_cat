// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it(`Invalid Breed: Returns a response about an invalid breed search`, (done) => {
    fetchBreedDescription(`1701`, (error, description) => {
      assert.isTrue(error);
      const expectedDesc = "Search for breed `1701` returned no results";
      assert.equal(expectedDesc, description.trim());
      done();
    });
  });
  it(`Invalid Breed: Returns a response about an invalid breed search`, (done) => {
    fetchBreedDescription(`1701`, (error, description) => {
      assert.isTrue(error);
      const expectedDesc = "Search for breed `1701` returned no results";
      assert.equal(expectedDesc, description.trim());
      done();
    });
  });
  it(`Invalid Arguments: Returns a response about invalid cli arguments`, (done) => {
    fetchBreedDescription(``, (error, description) => {
      assert.isTrue(error);
      const expectedDesc = `Invalid cli arguments\n  $> node index.js siamese`;
      assert.equal(expectedDesc, description.trim());
      done();
    });
  });
});