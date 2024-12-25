// 30-4 Arrow function, multiple parameter, function body
// function declaration
function add(a, b) {
    // const result = a + b;
    // console.log(a, b, result);
    return a + b;
}
const sum = add(10, 20);
console.log(sum);

// function expression
const add2 = function add2(a, b) {
    return a + b;
}
const sum2 = add2(10, 20);
console.log(sum2);

// arrow function
const add3 = (a, b) => a + b;
const sum3 = add3(10, 20);
console.log(sum3);
