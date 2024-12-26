// 31.3: map to double numbers
//map=> loop through an array and return a new array
//map=> return a new array
//map=> does not change the original array


const numbers = [1, 2, 3, 4, 5];
function double(number) {
    return number * 2;
}
const doubled = numbers.map(double);
console.log(doubled); // [2, 4, 6, 8, 10]


const double2 = number => number * 2;
console.log(double2(5)); // 10


// const doubled = [];
// for (const number of numbers) {
//     doubled.push(number * 2);
// }
// console.log(doubled); // [2, 4, 6, 8, 10]


