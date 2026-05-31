const promiseOne = new Promise(function (resolve , reject) {

    // Do and async task
    //DB Calls , cryptography , network calls ,

    setTimeout( function () {
        console.log("Async task in completed");
        resolve() ;
        
    } , 1000)
}) ;

promiseOne.then(function () {
    console.log("Promise Consumed");
    
})


// 
new Promise((resolve, reject) => {
    
    setTimeout(function () {
        console.log("Async Task 2 completed");
        resolve() ;
    } , 1000)

}).then(function() {
    console.log("Async 2 resolved");
    
})


// 
const promiseThree  = new Promise((resolve  , reject) => {
    
    setTimeout( function() {
        resolve({username: "chai" , email:"example.com"}) ;
    } , 1000)
})

promiseThree.then(function(userObj) {

    console.log(userObj);
    console.log(`user email is : ${userObj.email} and Name is : ${userObj.username}`);
    
    
})


// 
const promiseFour  = new Promise(function (resolve , reject) {

    setTimeout(function() {
        let error = true ;

        if(!error) {
            resolve({username: "shubham" ,password: "1234"})
        } else {
            reject('ERROR  , SOMETHING WENT WRONG')
        }

    },1000)

})

// then and catch 

promiseFour.then(function(myObj) {
    return myObj.username ;
})
.then((username) => {
    console.log(`username is : ${username}`) ;
})
.catch((err) => {
    console.log(err);
    
}).finally(() => {
    console.log("The promise is either resolved aur rejected");
    
})


//  async and await 

const promiseFive = new Promise(function (resolve , reject) {

    setTimeout( function() {
        let error  = true  ;

        if(!error) {
            resolve({username: "hitesh" , email: "chaiaurcode.com"}) ;

        } else {
            reject("OOPS SOMETHING WENT WRONG")
        }
    }, 1000)
}) ;


async function consumePromiseFive() {
    try {
        const response =  await promiseFive ;
        console.log(response);
    } catch(err) {
        console.log(err);
        
    }
    
}

consumePromiseFive(); 


// 
async function getAllUsers() {
    try {
        const resposne = await fetch('https://jsonplaceholder.typicode.com/users') ;

        const data =  await JSON.parse(resposne) ;
        console.log(data);

    } catch(error) {
        console.log(error);   
    }
      
}

// getAllUsers() ; 


// same thing in then and catch 

fetch('https://api.github.com/users/shubham12an-2007')
.then(function (response) {
    const data = response.json() ;
    return data ;

})
.then((data) => {
    console.log(`Username is : ${data.name}`) ;
    console.log(`Follower is : ${data.followers} `);
    
    
})
.catch((error) => {
    console.log(error);
    
}) ;