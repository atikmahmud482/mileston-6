//advance es6
// Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Destructuring assignment
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 30

// Template literals
const greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // Hello, John! You are 30 years old.

// Default parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10

// Rest operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.

// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise.then((message) => {
    console.log(message); // Success!
});