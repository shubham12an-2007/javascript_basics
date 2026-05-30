// const { createContext } = require("react"); 

const form = document.querySelector("#bmi-form") ;
const resultContainer = document.querySelector("#results") ;

form.addEventListener('submit' , function(e) {

    e.preventDefault() ;

    const heightInput = parseInt(document.querySelector("#height").value) ;
    const weightInput = parseInt(document.querySelector("#weight").value) ;

    

    if( heightInput === "" || heightInput < 0 || isNaN(heightInput)) {
        resultContainer.innerHTML = "Please Give a valid height "
    } else if (weightInput === "" || weightInput < 0 || isNaN(weightInput)) {

    }
    else{
        const bmiValue = (weightInput  / ((heightInput * heightInput) / 10000)).toFixed(2) ;

        // show the results 
        // resultContainer.innerHTML = `<span>${bmiValue}</span>`  ;  

        if(bmiValue > 24.90){
            resultContainer.innerHTML = `<span>${bmiValue} : OverWeight </span>`  ; 

        } else if(bmiValue > 18.60){
            resultContainer.innerHTML = `<span>${bmiValue} : Normal </span>`  ; 
        } else {
            resultContainer.innerHTML = `<span>${bmiValue} : UnderWeight</span>`  ; 
        }

    }
}) ;