// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); //false

// const bigNumber = 345688584343943n


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "doga", "naagraj"]

let myObj = {
    name:"Jeel",
    age:20,
}

const myFunction = function(){
    console.log("Hello World");   
}

// console.log(typeof heros);

/*
 Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


// ++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non Primitive)

let myYoutubename = "jeelchheta"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"jeel@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "jeel1@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
