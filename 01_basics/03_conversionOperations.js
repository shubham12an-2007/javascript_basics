let score  = "true"


console.log(typeof (score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan (Not a Number) but type is number 
// true => 1 and false => 0

let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true and 0 =>  false
// "" => false 
// "hitesh" => true 

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


// ************************* Operations ********************** //

let value  = 3
let negValue = -value 

// console.log(negValue);

// console.log(2 + 2);
// console.log(2-2);
// console.log(2 ** 3);
// console.log(3 % 2);
// console.log(2/3);


let str1 = "hello"
let str2 = " shubham"

let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log(); 

console.log(+true);  // 1
console.log(+"");    // 0

let num1 , num2 , num3 

num1 = num2  = num3 = 2 + 2

let gameCounter = 100
gameCounter ++ ;
console.log(gameCounter);


// Perfix and Postfix
let x = 3
y = x ++  ;     // postfix (usage ke baad increment hogi value )

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"


let a = 3;
b = ++a ;         // prefic (usage se pehle increment hogi value )

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"