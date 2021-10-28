// simple example
let myPromise = new Promise((resolve, reject) => {
  if (success) {
    resolve(data);
  }
  else {
    reject(reason);
  }
})

// chaining
MethodThatReturnsPromise()
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('Done!'));
