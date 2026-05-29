// SCOPE IN JS //

let a  = 300 ;
let c = 245 ;

if(true){
    let a = 10 ;
    const b = 20 ;

    // var c = 30 ;   
    
    console.log("INNER : "  + a);   // 10 
    
}

// console.log(a);      // a not defined in this scope 
// console.log(b);         // b not defined in this scope 
// console.log(c);  


// ++++++++++++  NESTED SCOPE +++++++++++++++++++  //

function one() {
    const username = "shubham" 

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);    // website one ke scope  me nhi hain

    two()
    
}

one()

if(true) {
    const username = "shubh"

    if(username == "shubh") {
        const website =  " youtube"
        console.log(username + website);
        
    }

    // console.log(website);  website not in this scope 
    
}

// console.log(username);     username not in this scope 


// ++++++++++++++++++++ interesting +++++++++++++++++++++  //

addone(5)      // 6   (run ho jayega pehle use kiya baad me declare )
function addone(num) {
    return num + 1

}


const addTwo = function(num) {
    return num + 2
}

addTwo(5)           // 7  (variable mei rkhenge func ko toh declare -> use 