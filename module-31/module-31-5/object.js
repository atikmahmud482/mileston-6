const products = [
    { id: 1, name: 'milk', price: 1.5 },
    { id: 2, name: 'bread', price: 1 },
    { id: 3, name: 'cheese', price: 2 }

];
const prices = products.map(product => product.price);
console.log(prices); // [1.5, 1, 2]

//find
const product = products.find(product => product.id === 2);
console.log(product); // { id: 2, name: 'bread', price: 1 }
//reduce
const sum = products.reduce((acc, product) => acc + product.price, 0);
console.log(sum); // 4.5
//filter
const filteredProducts = products.filter(product => product.price > 1);
console.log(filteredProducts); // [ { id: 1, name: 'milk', price: 1.5 }, { id: 3, name: 'cheese', price: 2 } ]

const total = products.reduce((acc, product) => acc + product.price, 0);
console.log(total); // 4.5
