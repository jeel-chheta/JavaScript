const user = {
    username: "Jeel",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Jee"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Jeel"
//     console.log(this.username);    
// }
// chai()

const chai = () =>{
    let username = "Jeel"
    console.log(this.username);    
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4))
