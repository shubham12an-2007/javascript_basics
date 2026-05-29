// const coding = ["java" , "js" ,"python" , "ruby"] 

// for each value return nhi krta hain 

// const values  =  coding.forEach((item) => {

//     // console.log(item);  
//     return item ;
    
// })

// console.log(values);

 
//  filter 
const myNums  = [1,2,3,4,5,6,7,8,9,10]

const newNums  = myNums.filter( (num) => {
    return num > 4                               // {} (use return)
} )
console.log(newNums);


// for each for filetring
const newNumbers  = [] ;

myNums.forEach((num) => {
    if(num > 4){
        newNumbers.push(num)
    }
})

console.log(newNumbers);


// filter practice 

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
];

// const userBooks  = books.filter((bk) => bk.genre === "History" ) 

// const userBooks = books.filter((bk) => {return bk.publish >= 1995}) ;  

const userBooks = books.filter((bk) => {
    return (bk.publish >= 1995) && (bk.genre === "Science")

}) ; 


console.log(userBooks);
