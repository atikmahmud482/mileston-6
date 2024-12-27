const product = [
    { id: 1, name: 'milk', price: 1.5 },
    { id: 2, name: 'bread', price: 1 },
    { id: 3, name: 'cheese', price: 2 }
]

//has some properties , methods .
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
const products = new Product(1, 'milk', 1.5);
const products2 = new Product(2, 'bread', 1);
// console.log(products, products2); // Product { id: 1, name: 'milk', price: 1.5 }

class Teacher {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    lecture() {
        console.log('sir is teaching');
    }
}
const teacher = new Teacher('sir', 30, 'maths');
console.log(teacher); // Teacher { name: 'sir', age: 30, subject: 'maths' }
teacher.lecture(); // sir is teaching
