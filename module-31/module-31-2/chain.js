//data access
const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
// console.log(data);
// console.log(data[0].name);
const result = data.find(d => d.id === 2);
// console.log(result);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'laptop', price: 50000 },
        { id: 2, name: 'mobile', price: 15000 },
        { id: 3, name: 'watch', price: 5000 }
    ]
}
console.log(products.data[1].price);

const user = {
    id: 1,
    name: 'John',
    age: 25,
    education: {
        degree: 'Masters',
        school: 'Ideal School'
    }
}
console.log(user.education.degree);
