// reduce method 

const myNums  = [1,2,3,4]

const initialValue = 0;

const totalSum = myNums.reduce((accumulator , currentValue) => {
    console.log(`Acc : ${accumulator} : Curval : ${currentValue}`);
    
    return accumulator + currentValue 

} , initialValue )

console.log(totalSum);


// using arrow func 
const myTotal = myNums.reduce((acc, curVal) => { return acc + curVal} , 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course" ,
        price: 299
    } ,
    {
        itemName : "python ai/ml" ,
        price: 199
    } ,
    {
        itemName : "data science" ,
        price: 12299
    },
    {
        itemName : "java" ,
        price: 2199
    }
]

const totalPriceOFCart = shoppingCart.reduce((acc ,item) => acc+
  item.price , 0)

console.log(totalPriceOFCart);  // 14996 
