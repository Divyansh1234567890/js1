const user = {
   username :"divyansh",
   price:999,
   welcomeMessage:function(){
    console.log(`${this.username}, welcome to website`);
    // console.log(this); //this is a keyword that refers to current context 
   }
}
// user.welcomeMessage() //o/p->
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)//o/p->{} because here is no context that THIS refers and we run this code on node
// same code give o/p->(Window) if we run it on console window or browser

//IMPORTANT
//Window is a global object in console window or browser because we can access many events through it
//like click , formsubmit,alert,blur,close etc.

//IMPORTANT
//Arrow function//(1)No, you cannot print something using this inside an arrow function in the way you might with a regular function. 
//This is because arrow functions do not have their own this.
// Instead, they inherit this from the surrounding lexical context (the scope in which the arrow function is defined).

//(2)Arrow Function: Implicit return in one-liners (no need for the return keyword if the function body is a single expression).
//const double = (x) => x * 2; // Implicit return


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//o/p->{}
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//    let username = "hitesh" //o/p->{}
//    console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  //o/p->7 explicitly return 
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )//o/p->7 implicitly return 

// const addTwo = (num1, num2) => ({username: "hitesh"}) //{ username: 'hitesh' }


// console.log(addTwo(3, 4))

