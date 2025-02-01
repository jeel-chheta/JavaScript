// Dates

let myDate = new Date()
// console.log(myDate); //2025-02-01T04:24:50.397Z
// console.log(myDate.toString()); //Sat Feb 01 2025 04:25:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sat Feb 01 2025
// console.log(myDate.toLocaleString()); //2/1/2025, 4:26:34 AM
// console.log(typeof myDate); //object

// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString()); //Mon Jan 23 2023
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString()); //1/23/2023, 5:03:00 AM

let myCreateDate = new Date("2023-01-04")
// console.log(myCreateDate.toLocaleString()); //1/4/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1738384313097
// console.log(myCreateDate.getTime()); //1672790400000
// console.log(Math.floor(Date.now()/1000)); //1738384406

let newDate = new Date()
// console.log(newDate); //2025-02-01T04:34:29.487Z
// console.log(newDate.getMonth()); //1
// console.log(newDate.getDay()); //6

newDate.toLocaleString('default',{
    weekday: "long",
})