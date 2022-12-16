// Promise based 'request'
const requestPromise = require('request-promise');

requestPromise.get('https://www.google.com/')
  .then((body) => {
    console.log(body);
  })
  .catch((error) => {
    console.log('There was an error!!!');
    console.log(error);
  })
