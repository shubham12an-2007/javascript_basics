// Dates 

let myDate = new Date() 
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(typeof myDate); // Date object 

let myCreatedDate = new Date(2026 , 4,28) ;  // month starts from zero
let newDate = new Date("2026-05-28") ;

console.log(myCreatedDate.toDateString());
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myCreatedDate.getTime());

// Date.now()  -> milliseconds mei value deta hain 
console.log(Math.floor(Date.now() / 1000 ));


let newDate1 = new Date() ;
console.log(newDate1.getMonth() + 1 );  // month starts from zero 


newDate1.toLocaleString('default' , {
    weekday: "long" ,
   dateStyle: "medium"  , 
})

