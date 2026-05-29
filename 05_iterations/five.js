const coding = ["js" , "java" , "ruby" , "cpp" , "python"] ;

// ny default array loop to iterate
// for each loop 

coding.forEach( function (item) {
    console.log(item);
    
})


console.log("using arrow function in foreach loop");

// syntax of arrow functions 
coding.forEach((item) => {
    console.log(item);
    
})

// passing function inside the foreach loop 
function printMe(item) {
    console.log(item);
    
}

coding.forEach(printMe)   // just give the refrence it will print khudse 

//  it has three things access item , index and complete array
coding.forEach((item , index , arr) => {
    console.log(item , index, arr);
    
})


//  data are mostly in the form of array of objects 
const myCoding  = [
    {
        languageName: "javascript" ,
        languageFileName: "js" ,
    } ,
    {
        languageName: "java" ,
        languageFileName: "java" ,
    } ,
    {
        languageName: "python" ,
        languageFileName: "py" ,
    }
]

myCoding.forEach((item) => {
    console.log(`Language Name : ${item.languageName} :: LanguageFileName :  ${item.languageFileName}`);
    
})

