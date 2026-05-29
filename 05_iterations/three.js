// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);

}

// for of loop on string 
let greetings = "Hello World"
for (const greet of greetings) {
    if(greet === " "){
        continue ;
    }

    console.log(`Each Variable : ${greet}`); 
}


// Maps (Unique Values)

const map = new Map() ;
map.set('IN'  , "India")
map.set('US' , 'United States of America')
map.set('FR' , 'France')

for (const [key , value] of map) {    // array destructured
    console.log(key  ," := " , value) ;
}

const myObject = {
    'game1' : 'NFS' ,
    "game2" : "Spiderman game" ,
}

// here for of se iteratable nhi hain objects 

// for (const [key , value] of myObject) {
//     console.log();
    
// }