function mult(...numbers) {
    const reducer = (accumulator, curentValue) => accumulator * curentValue;
    return numbers.reduce(reducer);
}

function mult2(numbers) {
    let result = 1;
    for(i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}

console.log(mult(1, 2, 3, 4));
console.log(mult2(1, 2, 3, 4));
