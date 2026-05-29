// const tinderUser = new Object()      // singleton object 
const tinderUser = {}             // object literal 

tinderUser.id = "123abc" ;
tinderUser.name = "Sammy" ;
tinderUser.isLoggedIn = false   ;

// console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "hitesh" ,
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {
    1: "a" , 2:"b"
}
const obj2 = {3:"a" , 4: "b"} ;
const obj4 = {5:"a" , 6:"b"} ;


// to combine one or more objects into one object
// const obj3 =  Object.assign({} , obj1 , obj2 , obj4)
// console.log(obj3);


// using spread operator
const obj3 = {...obj1 , ...obj2 , ...obj4}
console.log(obj3);

// array of objects
const users = [
    {
        id:1  ,
        email: "sk@gmail.com" ,
    } ,
     {
        id:2  ,
        email: "eshh@gmail.com" ,
    } ,
     {
        id:1  ,
        email: "hitesh@gmail.com" ,
    }

]

console.log(users[1].email)


// to get every key of an object 

console.log(Object.keys(tinderUser));   // array of keys 
console.log(Object.values(tinderUser));    // array of values 

console.log(Object.entries(tinderUser));   // array of key and value pairs 
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true 



// Objects destructuring  //

const course  = {
    coursename : "js in hindi" ,
    price : "999" ,
    courseInstructor: "hitesh" ,
}

const {courseInstructor : instructor } = course

// console.log(courseInstructor);   // hitesh 
console.log(instructor);


// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

//JSON (JAVA SCRIPT OBJECT NOTATION )

// {
//     "name" :"hitesh" ,
//     "coursename" : "js in hindi" ,
//     "price" : "free" ,
// }



