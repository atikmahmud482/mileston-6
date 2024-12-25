// var: no reason to use it. It's a legacy feature.
// let: use it when you need to reassign a variable. Allow it to reassign.
// const: use it when you don't need to reassign a variable. not allow it to reassign.

const money = 100;
// money = 200; // Error: Assignment to constant variable.
const rich = money + 100;
console.log(rich);

let count = 0;
count = count + 1;
console.log(count);

const numbers = [12, 45];
// numbers = [12, 45, 88]; // Error: Assignment to constant variable.
numbers.push(88);
console.log(numbers);


// object
const person = {
    name: 'John',
    age: 30
};
// person = { name: 'Smith', age: 40 }; // Error: Assignment to constant variable.

// // loop
// for (const i = 0; i < 10; i++) {
//     // Error: Assignment to constant variable.
//     // console.log(i);
// }
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log(sum);
    // console.log(i);
}