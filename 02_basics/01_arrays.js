// arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["ironman" , "nagraj"]

const myArr2 = new Array(0,1,2,3,4,5)
console.log(myArr[1]) ;

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() ;

// myArr.unshift(0)   // array ke start me add krta hain
// myArr.shift()       // array ke start value hta deta hain

// console.log(myArr.includes(2));  // true
// console.log(myArr.indexOf(9));   // -1 as 9 does not exists 
 

// const newArr = myArr.join()  // ab yha pe newArr ek string ban gya hain

// console.log(myArr);
// console.log( typeof newArr);


// slice and splice 

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log( "B", myArr);
console.log(myn1) ;

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);


// slice array ka portion nikalta hain on a given range but never make changes in the original array 

// splice takes out the portion of the array of a given range and also takes out the given portion fro  the original array
