/* 
truthy
1. true
2. any number(+ , - ) will be truthy other than 0.
3. any string other than empty string
4. '0' 'false'
5. {}
6. [],[3,5,7,8]
7. 

falsy:
1. false
2. 0
3. '' (empty)
4. undefined
5. null
6. 
*/

const x = false;
if (x) {
    console.log('value of x is truthy')
}
else {
    console.log('value of x is falsy')
}

// optional
// check falsy
const y = '';
if (!y) {
    console.log('falsy')
}
else {
    'truthy'
}
// check truthy
const z = ' ';
if (!!x) {
    console.log('value is truthy')
}
else {
    console.log('value is falsy')
}