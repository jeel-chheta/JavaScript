// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Jeel"
tinderuser. isLoggedIn = false
// console.log(tinderuser);

const regularUser = {
    email:"jeel@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Jeel",
            lastname:"Chheta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email:"j@gmail.com"
    },
    {
        id: 1,
        email:"j@gmail.com"
    },
    {
        id: 1,
        email:"j@gmail.com"
    },
    {
        id: 1,
        email:"j@gmail.com"
    }
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor:"hitesh" 
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Jeel",
//     "coursename":"js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]