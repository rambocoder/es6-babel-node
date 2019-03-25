const {checkInventory} = require('./library.js');



const prom = new Promise((resolveFn, rejectFn) => {
  
  let num = Math.random();
  if (num < .5 ){
    resolveFn('Yay!');
  } else {
    rejectFn('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
}

prom.then(handleSuccess, handleFailure);

let order = [['sunglasses', 1], ['bags', 2]];
checkInventory(order).then(handleSuccess, handleFailure);
order = [['sunglasses', 1], ['bags', 2]];
checkInventory(order).then(handleSuccess).catch(handleFailure);
