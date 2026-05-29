const myObject = {
    js : "javascript" ,
    cpp : "C++" ,
    rb : "ruby" ,
    swift : "swift by app"
}

// for in loop (it can be used for objects to iterate )

for (const key in myObject){
    console.log(`Key : ${key} :: Value := ${myObject[key]}`);
    
}

// for in loop for arrays 
const programming = ["java" , "cpp" , "ruby" , "javascript" ]

// array ki keys are by deagult numbers starting from 0  := 
for (const language in programming){
    console.log(programming[language]);
    
}

// for in loop in maps  ( ye for in loop se iteratable nhi hain)

const map = new Map() ;
map.set('IN'  , "India")
map.set('US' , 'United States of America')
map.set('FR' , 'France')

for ( const key in map) {
    console.log(key);         // will not print anything here 
    
}