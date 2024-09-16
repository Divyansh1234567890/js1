const name = "Divyansh sharma"
const repoCount = 50

// console.log(name + repoCount + " Value");//it is the bad way of string concatination and now it is 
//mostly not in used 

// console.log(`my name is ${name} and my repocount is ${repoCount}`);// best way of string concatination

const gameName = new String('Divyansh-hc-com')//another way of declaring and initializing string 

// console.log(gameName[0]);//it will give the first member of string i.e "D"
// console.log(gameName.__proto__);//it will give {}


// // console.log(gameName.length);//give the length of string 
// // console.log(gameName.toUpperCase());//convert all character of string into uppercase
// console.log(gameName.charAt(2));//give character at position 2 i.e "v"
// console.log(gameName.indexOf('t'));//give the position of character in string 

// const newString = gameName.substring(0, 4) //give substring in range but 4 is noe included
// console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "   Divyansh sharma    "
// console.log(newStringOne);//print the exact string
console.log(newStringOne.trim());//print string without whitespaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//it replace %20 by - in url

// console.log(url.includes('sundar')) it check whether 'sundar' is found in url or not 
//it gives true if sundar is found and gives false if sundar is not found.here it will give false

console.log(gameName.split('-'));//it split the string into array by checking where (-) is found