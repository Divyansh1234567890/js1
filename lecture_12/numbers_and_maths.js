const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);//now it is sure that balance is of number type

// console.log(balance.toString().length);//we can find the length of balance by converting it into a string
// console.log(balance.toFixed(1));//it will give 100.0

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//starting from right to left and give precision and here it will give 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//convert english to indian 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//give output with +ve sign
// console.log(Math.round(4.6));//give round off value
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//give a random value between [0,1]
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
//imp formula for finding a random number between a range
console.log(Math.floor(Math.random() * (max - min + 1)) + min)