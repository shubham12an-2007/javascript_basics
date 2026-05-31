function SetUsername(username){

    // complex db calls 
    this.username = username ;
    console.log('called');
    
}

function createUser(username , email , password) {
    this.email = email ;
    this.password = password  ;

    // call method ka use hota hain to hold the refrence  ;
    SetUsername.call(this ,username) ;
}


const chai  = new createUser('chai' , 'chai@google.com' , 1234) ;
console.log(chai);

