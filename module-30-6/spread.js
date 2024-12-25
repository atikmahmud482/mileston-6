const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max2 = Math.max(...numbers);
// console.log(numbers);
// console.log(...numbers);
console.log(max2);
// console.log(arrayMax);

const friends = [1, 2, 3, 4, 5];
const friends2 = friends;
const friends3 = [...friends];
// friends2.push(6);
// console.log(friends);
console.log(friends3);
friends3.push(6);
console.log(friends3);

// const friends3 = [friends];
// console.log(friends3);


//advanced
const sonkha = [...friends, 9999];
console.log(sonkha);