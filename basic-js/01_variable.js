const accountId= 14235
let accountEmail = "vivek@gmail.com"
var accountPassword = "12345"
accountCity = "patna"
let accountState = "Bihar";

// accountId =3 // not allowed

accountEmail = "v@gmail.com"
accountCity = "gaya"
accountPassword = "23452"



// console.log(accountId);node basic-js/test.js

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* 
Prefer not to use var
becouse of issue in block scope and functional scope
*/

// console.log("vivek");


let a = 2
var b = 4
const c = 4

console.log(a, b, c );


