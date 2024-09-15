// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false(because first null converted into zero and then check condition )
console.log(null == 0); // false (because null does not convert into zero because of equality)
console.log(null >= 0); // true (because first null converted into zero and then check condition)

console.log(undefined == 0); //false(because undefined does not convert into zero )
console.log(undefined > 0); //false(because undefined does not convert into zero )
console.log(undefined < 0); //false(because undefined does not convert into zero )

// === 

console.log("2" === 2); //false (it check datatype also)