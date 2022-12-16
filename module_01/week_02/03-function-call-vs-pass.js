// function myfunction(){}
// const anotherFunction = function(){}
// const finalFunction = () => {}

const sayHello = (person, message) => {
  return `${person} says ${message}`;
}

// const message = sayHello('Maui', 'hello november cohort!');
// console.log(message);

/*
  In functions, ONE THING IS CALLING/INVOKE/EXECUTE
*/

console.log(sayHello('Bob', 'can we build it???'));

/*
  Another completely different thing is PASSING A FUNCTION
*/

console.log(sayHello)