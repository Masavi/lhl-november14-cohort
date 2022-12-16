const myPromise = new Promise((resolve, reject) => {
  const random = Math.random();

  setTimeout(() => {
    console.log('Timer has finished!');
    if (random > 0.5) {
      return resolve(random)
    }
    return reject(random)
  }, 3000)

})

console.log(myPromise);
// We use promises by using .then() and .catch()

myPromise
  // resolve -> then
  .then((randomNumber) => {
    console.log(`Promise resolved! 🎁 with number ${randomNumber}`);
  })
  // reject -> catch
  .catch((randomNumber) => {
    console.log(`Promise failed 😢 with number ${randomNumber}`);
  })
