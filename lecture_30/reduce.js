const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)//there is an accumulator that contains an initial value(here accumulator contains initial value=0)
       //after that accumulator updates to accumulator+=currentvalue and initially currentvalue is 
       //myNums[0]=1 after that currentvalue updates and equal to myNums[1]=2 and accumulator = 1+2=3.

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);//output=acc=0+1=1 and then 1+2=3 and then 3+3=6 so final value(6) is stored in
                        //accumulator that is output.


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);