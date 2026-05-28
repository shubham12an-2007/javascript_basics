const marvel_heros = ["thor" , "ironman" , "captain" , "spiderman"]
const dc_heros = ["superman" ,"flash" ,"batman" ,"greenMarvel"]

// marvel_heros.push(dc_heros) ;

// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);


// const all_heros =  marvel_heros.concat(dc_heros)
// console.log(all_heros);


// spread operator  (any number of array ko jod skte hain)
const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6] ,7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // simple array
console.log(real_another_array);


console.log(Array.isArray("hitesh"))  // false 
console.log(Array.from("hitesh"))      

console.log(Array.from({name: "hitesh"}));  // interesting  // []


let score1 = 100 ;
let score2  = 200 ;
let score3 = 300 ;

console.log(Array.of(score1 , score2 ,score3));  // [100,200,300]
