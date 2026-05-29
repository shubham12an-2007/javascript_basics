function sayMyName() {
    console.log("Shubham");
    
}

// sayMyName() 

function addTwoNumbers(number1, number2) {  

    // let res =  number1 + number2 ;
    // return res ;

    return number1 + number2 ;
    
}

result  =  addTwoNumbers(2,4)

// console.log("Result : " + result); 


function loginUserMessage(username = "Guest User") {

    if (username === undefined) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in ` ;
}


// console.log(loginUserMessage("Shubham"));    

// console.log(loginUserMessage());      // kuch value nhi toh undefined


// ++++++++++++++++++++++ SHOPPING CART ++++++++++++++++++ //

function calculateCartPrice(...num1){    // rest operator

                         // makes an array of all    number passed 
    return num1 
}

console.log(calculateCartPrice(200 , 46,242 , 2000));



const user = {
    username: "hitesh" ,
    prices : 199 ,
}

function handleObject(anyObject) {

    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
    
}

// handleObject(user) 

handleObject({
    username : "sam" ,
    price  : "1919" ,
})


const myNewArr =   [200,400,292,900] ;

function returnSecondValue(array){
    return array[1] ;
}

// console.log(returnSecondValue(myNewArr)); 

console.log(returnSecondValue(
    [200,400,292,900]
));
