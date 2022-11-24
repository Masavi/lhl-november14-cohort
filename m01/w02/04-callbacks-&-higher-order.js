// what is a higher order function?
const mexicanFood = ['tacos', 'enchiladas', 'pozole', 'chilaquiles'];

// forEach expects a function inside as an argument!!!!!!
// mexicanFood.forEach((food) => console.log(food));

/*
  forEach is an example of a HIGHER ORDER FUNCTION (HOF)
  HOF are functions that receive a function as an argument
*/


// what is a callback?
const movies = ['Avatar', 'Black Panther', 'Heat', 'Avatar 2', 'Interstellar'];

const showMovie = (movie, index) => console.log(index, movie);
// movies.forEach(showMovie);

/*
  PROBLEM SOLVING TIME

  1) Implement your own forEach
*/

const animalsArray = [
  'frog',        // 0
  'bear',        // 1
  'penguin',     // 2
  'raccoon',     // 3
  'lion',        // 4
  'another frog' // 5
]; // length = 6

/*
  This is a higher order function, because it is
  expecting a function as one of the arguments
*/
const myForEach = (array, callback) => {
  for(let i=0; i<array.length; i++) {
    callback(array[i]);
  }
}

/*
  This is a callback because it is being passed as
  an argument of another function (the HOF)
*/
const animalLogger = (animal) => {
  const message = `The animal is ${animal}`;
  console.log(message);
}

// myForEach(animalsArray, animalLogger);

/*
  2) Implement a forEachInReverse that does reverse iteration on an array and takes a cb much like forEach would.
  2.1) add a second parameter to the callback to support index passing (i)
*/

const animals = ['frog', 'bear', 'penguin', 'raccoon', 'lion', 'another frog'];


const forEachInReverse = (array, cb) => {
  const lastIndex = (array.length - 1);

  for(let i=lastIndex; i>=0; i--) {
    cb(array[i], i);
  }
}

const showElementAndIndex = (element, index) => {
  console.log(`[${index}] - ${element}`);
}

forEachInReverse(animals, showElementAndIndex);