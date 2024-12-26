const actor = {
    name: 'John',
    age: 30,
    phone: '01717111111',
    address: 'Dhaka',
    money: 50000,
}
//destructure object
const { name, age, phone, address, money } = actor;
console.log(name, age, phone, address, money);

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
const [x, y] = [100, 200];
console.log(first, second);
console.log(x, y);

function doubleThem(x, y) {
    return [x * 2, y * 2];
}
const [doubleX, doubleY] = doubleThem(5, 7);
console.log(doubleX, doubleY);
