function sayMyName(){
    console.log("J");
    console.log("e");
    console.log("e");
    console.log("l");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4)
// console.log("Result: ",result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Jeel"))
// console.log(loginUserMessage()) //undefined just logged in

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user= {
    username:"Jeel",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"Jee",
    price:300
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
