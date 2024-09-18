// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //now we are sure that mySym is of Symbol type
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //we can print each and every value by [] operator but not by .(dot) operator
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//this is only the method of printing symbol we can not print it like console.log(JsUser.mySym)

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser) //if we apply freeze() then we can not change the values
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     // console.log("Hello JS user"); --> Hello JS user
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); -->undefined
// }

// // console.log(JsUser.greeting());--> Hello JS user
// // console.log(JsUser.greetingTwo()); -->undefined