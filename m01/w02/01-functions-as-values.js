// https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch08s04.html#:~:text=In%20JavaScript%2C%20however%2C%20functions%20are,to%20functions%2C%20and%20so%20on.

// Normal function *definition*
function getTriangleArea(base, height) {
  return (base*height)/2
}

// console.log(getTriangleArea(4, 10));

// const array = [1, true, {}, "hello world", getTriangleArea];
// console.log(array[4](4, 5));

const area = getTriangleArea;
console.log(area(6, 3));

const myObject = {
  myMethod: getTriangleArea
}

console.log(myObject.myFunction(7, 4));

/*
  Functions are treated as any other value in JavaScript, this means that
  we can stored them in variables, pass them as values in objects, in arrays, or in any other place!
*/