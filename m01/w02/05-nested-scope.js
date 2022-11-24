// http://ryanmorr.com/understanding-scope-and-context-in-javascript/

/*
  the scope is the context where data is defined, 
  and it tells me if i can access that data or i can not.
*/

// GLOBAL SCOPE
const answerToTheUniverse = 42;

function first() {
  // LOCAL SCOPE
  const beer = "Corona";
  console.log('first', answerToTheUniverse);
  
  function second() {
    const isHungry = true;
    console.log('second');

      function third() {
        console.log('third', beer);

          function fourth() {
            console.log('fourth', answerToTheUniverse, isHungry);
          }
          fourth();
      }
      third();
  }
  second();
}

first();

/* 
  We can't access "beer" as it is defined
  in the functions local scope
*/
console.log(beer);