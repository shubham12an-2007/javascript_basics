// Primitve 

// 7  tyeps : String , Number , Boolean , Null , Undefined , Symbol,BigInt

const score  = 100 ;
const scoreValue = 100.3 ;

const loggedIn = false ;
const outsideTemp = null ;
// const userEmail ;               // undefined 

const id =  Symbol("123")
const anotherId = Symbol("123")    // both symbol are different 

console.log(id == anotherId);   // false

const bigNumber = 278787278178781n ;



// Refrence  (Non Primitive )

// Arrays , Objects  , Functions 

const heros = ["Ironman" , "naggraj" ,"doga" , "boga"]
let myObj = {
    name : "shubham" ,
    age : 22 ,
}

const myFunction =  function(){
    console.log("Hello World");
    
}

console.log(typeof outsideTemp);  // object 

console.log(typeof myFunction);  // function (object function )

console.log(typeof heros);  //  object
console.log(typeof id);   // symbol
console.log(typeof scoreValue);   // number
console.log(typeof score);  // number


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive data types ) , Heap (non primitive data types)

let myYoutubeName = "shubham@123.com" ;


// primtive data types are in stack memory and values are passed by copy here and actual me changes nhi hote
let anotherName = myYoutubeName ;
anotherName = "shubhamsingh.com" ;

console.log(myYoutubeName);
console.log(anotherName);


// heap me non primitive data types jaate hain 
// aur heap me pass by refrence hota hain and changes permanent hote hain
let userOne = {
    email : "user@google.com" ,
    upi : "user@ybl" ,
}

let userTwo  = userOne ;

userTwo.email = "shubham@google.com" ;


console.log(userOne.email);
console.log(userTwo.email);
