const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    // console.log(number);
}

const nobab = 'siraj ud doula';
for (const letter of nobab) {
    // console.log(letter);
}

const glass = { name: 'glass', price: 1, color: 'transparent', isClean: true };
for (const key in glass) {
    console.log(key);
    console.log(glass[key]);
}

const keys = Object.keys(glass);
for (const key of keys) {
    console.log(key);
    console.log(glass[key]);
}

//summary
//for in loop is used for objects
//for of loop is used for arrays and strings

