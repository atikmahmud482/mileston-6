const difference = (x, y) => x - y;
const multiple = (first, second) => first * second;
const getAge = (person) => person.age;
const student = { name: 'John', age: 30 };
const age = getAge(student);
// console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([1, 2, 3, 4, 5]);
// console.log(third);

const doubleIt = (num) => num * 2;
const result = doubleIt(5);
// console.log(result);

const getPI = () => Math.PI;
const pi = getPI();
// console.log(pi);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result2 = doMath(7, 5);
// console.log(result2);
//return keyword is optional for single line function body
//return keyword is mandatory for multiple line function body
//return keyword is mandatory for multiple line function body