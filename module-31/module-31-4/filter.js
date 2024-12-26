const number = [1, 2, 3, 4, 5];
const result = number.filter(number => {
    return number % 2 === 0;
});
console.log(result); // [2, 4]


const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const tNames = friends.filter(friend => friend.length > 6);
console.log(tNames); // ['Tom Hanks', 'Tom Solaiman']

//no.1 map
//no.2 forEach
//no.3 filter
//no.4 find
