class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    activity() {
        console.log(`${this.name} is playing`);
    }
}

const kodom = new Person('kodom', 20);
console.log(kodom); // Person { name: 'kodom', age: 20 }
kodom.sleep(); // kodom is sleeping
const badam = new Person('badam', 25);
badam.sleep(); // badam is sleeping
badam.activity(); // badam is playing