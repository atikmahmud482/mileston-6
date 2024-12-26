//1. var let const
var x = 10;
let y = 20;
const z = 30;
//2. default parameters
function add(num1, num2 = 0) {
    return num1 + num2;
}
const result = add(15);
console.log(result);
//3. template string
const firstName = 'Justin';
const lastName = 'TimberLake';
const fullName = `${firstName} ${lastName} is a `
    + `good`;
console.log(fullName);
//4. arrow function
const add2 = (num1, num2) => num1 + num2;
const result2 = add2(10, 20);
console.log(result2);
//5. spread operator
const numbers = [2, 3, 4, 5, 6];
const max = Math.max(...numbers);
console.log(max);
//6. destructuring
const person = { name: 'Tom', age: 17, job: 'actor' };
const { name, age } = person;
console.log(name, age);
//7. object shorthand
const name2 = 'Adam';
const age2 = 23;
const person2 = { name2, age2 };
console.log(person2);
//8. object destructuring
const person3 = { name3: 'Tom', age3: 17, job3: 'actor' };
const { job3 } = person3;
console.log(job3);
//9. array destructuring
const numbers2 = [2, 3, 4, 5, 6];
const [first, second] = numbers2;
console.log(first, second);
//10. object keys, values, entries, freeze, seal,
const keys = Object.keys(person3);
const values = Object.values(person3);
const entries = Object.entries(person3);
console.log(keys, values, entries);
//11. for of loop
for (const n of numbers2) {
    console.log(n);
}
//12. array includes, find, filter
const isExist = numbers2.includes(5);
const bigger = numbers2.find(n => n > 4);
const bigger2 = numbers2.filter(n => n > 4);
console.log(isExist, bigger, bigger2);
//13. class, constructor, method
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Ideal School';
    }
}
const student1 = new Student(1, 'Tom');
const student2 = new Student(2, 'Jerry');
console.log(student1, student2);

