function sum(a, b, c) {
    console.log(arguments)
    //array like object;
    const result = a + b + c;
    return result;
}

console.log(sum(4, 3, 2))