// for of

// ["", "", ""]
// [{}, {}, {}] //we can pass objects in array

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {   // o/p->1 2 3 4 5 
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")   //o/p->Map(3) {
//                                             'IN' => 'India',
//                                             'USA' => 'United States of America',
//                                             'Fr' => 'France'
//                                              }
map.set('Fr', "France")
map.set('IN', "India")//map returns unique value


// console.log(map);

// for (const [key, value] of map) {  //o/p->IN :- India
//                                     //  USA :- United States of America
//                                     // Fr :- France
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) { //o/p->error because we can not iterate in objects through for of loop
//     console.log(key, ':-', value);   
    
// }