// for 

for (let i = 0; i < 10; i++) {
    const element = i ;

    if(element == 5) {
        console.log("5 is the best number");       
    }
    // console.log(element);
}

// 
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop Value : ${j} and outer loop : ${i} `); 

        console.log(i + " * " + j + " = " + i * j );
    }
}

let myArr = ["flash" , "batman" , "superman" , "ironman"]
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}


// break and continue
for (let i = 0; i < 20; i++) {

    if(i == 5) {
        continue ;
    } 
    if(i == 10){
        console.log("Detected 10 in the program");
        break  ;
    }
    console.log(i);
}

console.log('Loop Ended');
