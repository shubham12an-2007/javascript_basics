// ES6

class User {
    constructor(username , email ,password) {
        this.username = username ;
        this.email = email ;
        this.password = password ;
    }

    // Method 
    encryptPassword() {
        return ` Password is : ${this.password}abc` ;
    }

    changeUsername() {
        return ` new Username is : ${this.username.toUpperCase()}`
    }
}

const chai = new User('chai' , 'chai@gmail.com' , 1234) ;
console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// Under the hood 
function UserProto(username , password , email) {
    this.username = username ;
    this.password = password ;
    this.email = email ;
}

UserProto.prototype.encryptPassword = function() {
    return `${this.password}abcd` ;
}

UserProto.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}` ;
}

const tea = new UserProto('tea' ,1244 , 'tea@gamil.com' ) ;
console.log(tea.encryptPassword());

