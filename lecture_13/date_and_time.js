// Dates

let myDate = new Date()  
// console.log(myDate.toString()); //Tue Sep 17 2024 17:27:20 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Sep 17 2024
// console.log(myDate.toLocaleString()); //9/17/2024, 5:30:09 PM
// console.log(typeof myDate);// object type

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);// 1726594999784 Date.now() gives current time in miliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); //months are started from zero in javascript so we add 1 
// console.log(newDate.getDay()); //monday will start from 1 and sunday from 7

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

