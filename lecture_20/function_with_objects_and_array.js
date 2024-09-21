
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) //o/p->[ 200, 400, 500, 2000 ]

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))//o/p->[500,2000] because 200 is assign to val1 and 400 is assign to val2

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //o/p->Username is hitesh and price is undefined
// }

// handleObject(user)
// handleObject({
//     username: "sam",//Username is hitesh and price is undefined
//                     // Username is sam and price is 399
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));//o/p->400
console.log(returnSecondValue([200, 400, 500, 1000]));//o/p->400