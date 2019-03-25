async function giveMeFive() {
    return 5;
}

giveMeFive().then(resolvedValue => {
    console.log(resolvedValue);
});

let result = giveMeFive();
console.log(result);