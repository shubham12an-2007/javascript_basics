const score  = 400 

// specifically number bna diya gya usse 
const balance = new Number(100)
console.log(balance);


console.log(typeof balance.toString());   // string (ab ispe string methods lg skte hain sarre )

console.log(balance.toFixed(2));   // upto 2 decimals 

const otherNumber = 23.3838 ;

// percise upto 3 values 
console.log(otherNumber.toPrecision(3));  // returns a string 

const hundreds = 100000 ;
console.log(hundreds.toLocaleString('en-IN'));  // 1,00,000


const maxNumber = Number.MAX_VALUE ;
console.log(maxNumber);


// ++++++++++++++++++  MATHS +++++++++++++++++++++++++++ //

console.log(Math);  // object 
console.log(Math.abs(-4));   // 4
console.log(Math.round(4.3));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));

console.log(Math.min(1,2,3,45,-2));


// Math.random()
console.log(Math.random());
console.log((Math.random() * 10) + 1);  // [0,10)


const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1)) + min )


