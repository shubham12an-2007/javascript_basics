const name = "shubham" ;
const repoCount  = 51;

// console.log(name + ":" + repoCount);   outdated style to print

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// yha pe string ek object hain 
const gameName = new String("shubam_fc") ;

console.log(gameName[0]);
// console.log(gameName.__proto__);    ek object jisme string ke methods hain 


console.log(gameName.length);
console.log(gameName.toUpperCase());   // SHUBHAM_FC

// ab yha pe sarri nyi string ban rhi hain and original string me changes nhi ho rhe hain 

// kyuki strings are primitve data types stored in stack memory
// pass by value 

console.log(gameName.charAt(4));

console.log(gameName.indexOf("b"));

console.log(gameName.split("_"));

const newString  = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newString1 = "   shubham  " ;

console.log(newString1);
console.log(newString1.trim());

const url = "https://shubham.com/shubham%20singh" ;

console.log(url.replace("%20" , "-"))

console.log(url.includes("shubham"));  // true or false 




