const inventory = {
    sunglasses: 1900,
};

const myExecutor = (resolveFn, rejectFn) => {
    if (inventory.sunglasses > 0) {
        resolveFn('Sunglasses order processed.');
    } else {
        rejectFn('That item is sold out.');
    }
};

function orderSunglasses() {
    return new Promise(myExecutor);
}

let orderPromise = orderSunglasses();

console.log(orderPromise);

const usingSTO = () => {
    console.log('usingSTO()...');
}

setTimeout(usingSTO, 1500);

