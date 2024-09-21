// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");  //H
//                        //I
//                        //T
//                        //E
//                        //S
//                        //H 
//      console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// // addTwoNumbers()//output->NaN because we  call function but no arguments are passing
// addTwoNumbers(3,8)//output->11

              //OR

//       function addTwoNumbers(num1,num2){
//         return (num1+num2);//it return the result
//     }
//     // addTwoNumbers()//output->NaN because we  call function but no arguments are passing
//    console.log(addTwoNumbers(3,8))//output->11

// function addTwoNumbers(num1,num2){
//         console.log(num1+num2);
//     }
//     // addTwoNumbers()//output->NaN because we  call function but no arguments are passing
//     addTwoNumbers(3,null)//output->3


    // function addTwoNumbers(num1,num2){
    //     console.log(num1+num2);
    // }
    // // addTwoNumbers()//output->NaN because we  call function but no arguments are passing
    // addTwoNumbers(3,undefined)//output->NaN

    // function addTwoNumbers(num1,num2){
    //     console.log(num1+num2);
    // }
    // // addTwoNumbers()//output->NaN because we  call function but no arguments are passing
    // addTwoNumbers(3,"4")//output->34

    // function addTwoNumbers(num1,num2){
    //     console.log(num1+num2);
    // }
    // // addTwoNumbers()//output->NaN because we  call function but no arguments are passing
    // addTwoNumbers(3,"a")//output->3a


// function logInUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(logInUserMessage("divyansh")) //o/p->divyansh just logged in

// function logInUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(logInUserMessage("")) //O/P->just logged in

// function logInUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(logInUserMessage())//o/p->undefined just logged in

// function logInUserMessage(username){
//     if(username===undefined){
//         console.log("please enter a username")//O/P->please enter a username
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(logInUserMessage())

// function logInUserMessage(username="sam"){//default value->sam
//     if(!username){
//         console.log("please enter a username")//O/P->sam just logged in
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(logInUserMessage())

// function logInUserMessage(username="sam"){//default value->sam
//     if(!username){
//         console.log("please enter a username")//O/P->Divyansh just logged in
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(logInUserMessage("Divyansh"))



