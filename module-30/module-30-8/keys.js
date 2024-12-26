const glass = { name: 'glass', price: 1, color: 'transparent', isClean: true };
console.log(glass.name); // glass
//key
const keys = Object.keys(glass);
console.log(keys); // ['name', 'price', 'color', 'isClean']
//value
const values = Object.values(glass);
console.log(values); // ['glass', 1, 'transparent', true]
//pair or entry
const entries = Object.entries(glass);
console.log(entries); // [['name', 'glass'], ['price', 1], ['color', 'transparent'], ['isClean', true]]
//delete
delete glass.isClean;
console.log(glass); // { name: 'glass', price: 1, color: 'transparent' }

const { isClean, ...cleanGlass } = glass;
console.log(cleanGlass); // { name: 'glass', price: 1, color: 'transparent' }
console.log(isClean); // true
//seal
Object.seal(glass);
glass.price = 2;
console.log(glass); // { name: 'glass', price: 2, color: 'transparent' }

//freeze
// Object.freeze(glass);
glass.price = 2;
console.log(glass); // { name: 'glass', price: 1, color: 'transparent' }

//delete
delete glass.price;
console.log(glass); // { name: 'glass', price: 1, color: 'transparent' }