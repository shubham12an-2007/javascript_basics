const user = {
    username : 'hitesh' ,
    logInCount : 8 ,
    signedIn: true  ,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(`Login Count : ${this.logInCount}`);
        
        // this means current context 
        console.log(this);      
        
    }
}

function User(username , loginCount  , isLoggedIn ){
    this.username = username ;
    this.logInCount = loginCount ;
    this.isLoggedIn = isLoggedIn ;

    this.greeting = function() {
            console.log(`Welcome : ${this.username}`);
            
        }

    return this ;
}

const userOne = new  User("hitesh" , 12 , true) ;


const userTwo = new  User('chai aur code' , 10 , false ) ;


// console.log(user.username);
// console.log(user.getUserDetails());

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);  


