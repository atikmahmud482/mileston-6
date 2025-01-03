const user = { id: 33, name: 'Json', job: 'developer' };
//javascript object notation(Json)
const stringified = JSON.stringify(user);
console.log(stringified);
const parsed = JSON.parse(stringified);
console.log(parsed);
JSON.stringify(user);
console.log(user);  
