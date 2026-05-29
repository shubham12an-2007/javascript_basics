// Immediately Invoked Function Expressions (IIFE)

// named iife 
(function chai() {
    console.log("DB CONNECTED");
    
}) () ;


// second iife => an arrow function 

// unnamed iife 
((name) => {
    console.log("DB CONNECTED TWO " + name);
    
}) ("shubham")                                     // parameter in iife 



