class User {
    constructor(email , password) {
        this.email = email 
        this.password = password
    }

    get password(){
        return this._password.toUpperCase() ;
    }

    set password(newPassword){
        this._password = newPassword.toUpperCase() ;
    }   

    get email(){
        return this._email.toUpperCase() ;
    }

    set  email(value) {
        this._email = value.toUpperCase() ;
    }
}

const hitesh = new User("hitesh@api.com" , "abc") ;

console.log(hitesh.password);
console.log(hitesh.email);

