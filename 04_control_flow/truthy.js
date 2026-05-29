const userEmail = "eshh@gmail.com" ;
const newEmail = "" ;
const myArr= [] ;

if(userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");  
}

// falsy values 
// false , 0 , -0 , BigInt 0n , "" ,null , undefined , Nan 

// falsy alawa ke sarre truthy values

// truthy values 
// "0" ,'false' ," " ,[] , {} ,function() {}

if(myArr.length === 0){
    console.log("Array is empty");
} else {
    console.log("Array is not empty ");
    
}


const myObj = {}

if(Object.keys(myObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
    
}


// Nullish Coalescing Operator  (??) : null undefined

let val1  ;
val1 = 5 ?? 10 ;   // 5
val1 = null ?? 10 ;       // 10
val1 = undefined ?? 15 ;        // 15

val1 = null ?? 10 ?? 15           // 10

console.log(val1);


// Terinary Operator 

const iceTeaPrice = 100 ;
const ans = iceTeaPrice >= 80  ? "more than 80" : "less than 80"

console.log(ans);

