// 8 ways to undefine
//no.1 variable that is not initialized will give undefined
let first;
// console.log(first)
//no.2 function with no return
function second(a, b) {
    const total = a + b;
}
const result = second()
// console.log(result)
// no.3:Parameter that is not passed will be undefined.
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);

}
// third(2, 4)
// No.4: If return has nothing on the right side will return undefined
/*  */
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(3, - 4)
// console.log(total)
// No.5: Property that does not exists on an object will give you undefined
const fifth = { id: 2, name: 'atik', age: 5 }
// console.log(fifth.age.name)
//No.6: Accessing array element outside of the index range
const sixth = [3, 54, 6, 4]
// console.log(sixth[5])
//No.7: Deleting an element inside an array 
const seventh = [3, 54, 6, 4]
// console.log(seventh[5])
//No.8: Set a value to directly to undefined
const eighth = undefined;
console.log(eighth)