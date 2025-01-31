const accountId = 144553
let accountEmail = "jeel@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;
// accountId = 2 // not allowed 

accountEmail = "jeel1@gmail.com"
accountPassword = "212121"
accountCity = "Ahmedabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/