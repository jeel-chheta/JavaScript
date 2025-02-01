// singleton
// Object.create

// object literals

const mysym = Symbol("key1")
const JsUser = {
    name: "Jeel",
    "full Name": "Jeel Chheta",
    [mysym]: "mykey1",
    age: 20,
    location: "Surat",
    email:"jeel@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mysym])

// JsUser.email = "jeel1@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "jeel2@gmail.com"
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

