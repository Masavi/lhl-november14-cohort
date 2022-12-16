// Callback based 'request'
const request = require('request');

request.get('https://www.google.com/', (error, response, body) => {
  if (error) {
    console.log('There was an error!!!');
    return console.log(error);
  }

  console.log(body);
})
