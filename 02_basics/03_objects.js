// literal se bnayenge toh singleton nhi bnega par constructor se singleton always 


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Shubham"  ,
    "full_name" : "Shubam Singh" ,
    [mySym]: "mykey1" ,              // syntax to make a symbol as a key
    age:  18 ,
    location : "New Delhi" ,
    email : "shubham@123.com" ,
    isLoggedIn : false ,
    lastLoginDays: ["Monday" , "Wednesday"]  ,
}


console.log(JsUser.email);
console.log(JsUser["email"]);  // another way to access values 

console.log(JsUser["full_name"]);

console.log(JsUser[mySym]);

JsUser.email = "shubham@chatgpt.com" ;
// Object.freeze(JsUser) 

JsUser.email = "shubham@gemini.com"  // would not change as freezed
console.log(JsUser.email);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user ");
    
}

JsUser.greeting2 = function (){
    console.log(`Hello js user , ${this.name}`);
    
}

console.log(JsUser.greeting());  // func run ke liye () paranthesis

console.log(JsUser.greeting2());



