// 30-2 Default parameter for function
// if value is not provided, it will take the default value.
function add(a = 4, b = 2) {
    const result = a + b;
    console.log(a, b, result);
    return result;
}
// add(10, 20);
// const result = add(50);
// const result = add(50, 100);
const result = add();

function fullName(first, last = 'Smith') {
    const name = first + ' ' + last;
    console.log(name);
    return name;
}
function friends(numbs = [1, 2, 3]) {
    console.log(numbs);
}