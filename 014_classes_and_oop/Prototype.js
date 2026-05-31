let myName = "hitesh" ;


console.log(myName.length);


let myHeros = ["thor" , "spiderman"]; 

let heroPower = {
    thor : "hammer" ,
    spiderman : "sling" ,

    getSpiderPower:  function() {
        console.log(`Spider Power is : ${this.spiderman}`);
        
    }
}


// Object ko ye func diya humne toh array object and strings sbko mil jayegi
//        kyuki all are objects  


Object.prototype.hitesh = function() {
    console.log('hitesh is present in all objects');
}


// yha humne sirf array ko power de hain toh ye sibling yani object ko nhi milehi lhud se 

Array.prototype.heyHitesh = function() {
    console.log('Hitesh says hello');
}

myHeros.hitesh() ;



const User = {
    name: 'Chai' ,
    email: 'chai@google.com' ,
}

const Teacher = {
    makeVideos:true  ,
}

const TeachingSupport = {
    isAvailable: false ,
}

const TASupport = {
    makeAsiignment: 'js assignment' ,
    fullTime: true  , 
    __proto__: TeachingSupport ,
}

Teacher.__proto__ = User ;   // yha pe Teacher ne User ke properies and method le liey 


// mordern syntax

// Object.setPrototypeOf(kisko deni hain property , kiski property deni hain)
Object.setPrototypeOf(TeachingSupport , Teacher)  ;


let anotherUsername = "ChaiAurCode" ;

String.prototype.trueLength = function () {
    console.log(`${this.name}`);            // this humne  "ChaiAurCode 
    console.log(`True lenght is : ${this.trim().length}`);
    
}


anotherUsername.trueLength() ;
"hitesh".trueLength() ;