class User {
    constructor(username) {
        this.username = username ;
    }

    logMe() {
        console.log(`Username : ${this.username}`);
        
    }

    static createId() {
        return `123` ;
    }
}

class Teacher extends User {
    constructor(username ,email) {
        super(username) ;
        this.email = email ;
    }
}


const hitesh = new User('hitesh') ;
// console.log(hitesh.createId());      static method(createId)

const iphone  = new Teacher('iphone' , 'eye@phone.com')
iphone.logMe()

// console.log(iphone.createId());   child  cannot access static method 
