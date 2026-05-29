// if

const { useReducer } = require("react");

const isUserLoggedIn = true  ;
const temp = 42;


if(temp < 50 ) {
    console.log("less than 50 ");
    
} else {
    console.log("Temp greater then 50 ");
    
}

console.log("Executed the code ");


// <  , > , >= , <= , ==  , !=  , ===  , !== (relational operators)

const score  = 200 ;

if(score > 100) {
    const power = "fly" ;
    console.log(`User Power : ${power}`);
    
}


const balance = 1000 ;

// implicit scope of if statement 
if(balance > 500) console.log("test");


if (balance < 500) {
    console.log("less than 500");
    
} else if(balance < 750) {
    console.log("Less than 750"); 
} else if(balance < 900) {
    console.log("Less than 900"); 
} else {
    console.log("less than 1200");
}


const userLoggedIn = true  ;
const debitCard = true 
const loggedInFromGoogle = false ;
const loggedInFromEmail = true  ;

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
    
} else if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
    
}
