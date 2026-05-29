const myNumbers =  [1,2,3,4,5,6,7,8,9,10]

newNumbers = myNumbers.map((item) => item + 10) ;
console.log(newNumbers);        // returns an array 

// using for each
const myNums  = []
myNumbers.forEach((item) => {
    const  newItem = item + 10 ;
    myNums.push(newItem)
})

console.log(myNums);



// Method of Chaining 
const newNums  = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 50)
                    
console.log(newNums);
