const fs = require('fs');

const myPromise = fs.promises.readFile('./message.txt', { encoding: 'utf-8' });

myPromise
  .then((data) => {
    console.log('Finished reading file! \n');
    return fs.promises.writeFile('./anotherFile.txt', data)
  })
  .then(() => {
    console.log('Finished writing file!!! \n');
    return fs.promises.readFile('./anotherFile.txt', { encoding: 'utf-8' })
  })
  .then((anotherFileString) => {
    console.log(anotherFileString);
  })
  .catch((error) => {
    console.log('An error happened!!, look:');
    console.log(error);
  })
  