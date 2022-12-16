const fs = require('fs');

fs.readFile('./message.txt', { encoding: 'utf-8' }, (error, data) => {
  if (error) throw Error(error);
  console.log(data);

  fs.writeFile('./newfile.txt', data, (error) => {
    if (error) throw Error(error);
    console.log('Finished writing!');
    console.log(error);
    
    fs.readFile('./newfile.txt', (error, newFile) => {
      if (error) throw Error(error);
      console.log(newFile);

      const string = String(newFile);
      console.log(string);
    })
  });
});
