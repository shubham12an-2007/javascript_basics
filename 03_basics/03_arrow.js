const user = {
    username : "hitesh" ,
    price: 999 ,

    welcomeMessage :  function() {
        console.log(` ${this.username}  , welcome to website `);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam" ;

// user.welcomeMessage()

// console.log(this);           {}

// function chai() {
//     console.log(this);
    
// }

// chai()


const chai = function () {
    let username = "hitesh"
    console.log(`${this.username}  , welcome`);
    
}

// const chai = () => {
//     let username = "shubham"
//     console.log(this);
    
// }

 chai()                // {}  


// ++++++++++++++++++++++  Arrow Functions ++++++++++++++++  //

const addTwo  = (number1  , number2) => {
    return number1 + number2     ;
}

console.log(addTwo(3,4));


// implicit return 
const addOne = (num1 , num2) =>  num1 + num2;

console.log(addOne(3,5));

const addThree = (num1 , num2) => ({username : "sammy"})

