// When we name a function, this function is stored within the NAME associated
// this means that i can have access to the function afterwards, through the name
function square(number) {
  return number*number;
}

// console.log(square(5));

/* 
  ANONYMOUS FUNCTIONS:
    Functions that dont have a name to be associated with.
    We have two types:
    1) Normal function (using the "function" keyword)
    2) Arrow functions (using the "=>" fat arrow symbol)
      () => {}
      this were introduced with ECMAScript 6 (ES6)
*/
const antoherSquare = function (number) {
  return number*number;
}
// console.log(antoherSquare(7));

// FUll syntax of arrow function
const finalSquare = (number) => {
  console.log('user inputs:', number);
  return number*number;
}
// console.log(finalSquare(3));

// Simplified syntax
const addTwoNumbers = (number1, number2) => number1+number2;
console.log(addTwoNumbers(4, 2));

/*
  Note: arrow functions are the most popular functions used in JS.
        You also gonna be using regular functions, but most of the time
        you will be using ARROW FUNCTIONS.
*/