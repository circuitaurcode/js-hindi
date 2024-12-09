const accountId= 14235
let accountEmail = "vivek@gmail.com"
var accountPassword = "12345"
accountCity = "patna"

// accountId =3 // not allowed

accountEmail = "v@gmail.com"
accountCity = "gaya"
accountPassword = "23452"



console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

/* 
Prefer not to use var
becouse of issue in block scope and functional scope
*/

