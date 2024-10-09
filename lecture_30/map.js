const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)  //map return a value without using return keyword
                .filter( (num) => num >= 40) // if we done various operation throug map , filter etc then
                                            // it is known as chaining .

console.log(newNums);