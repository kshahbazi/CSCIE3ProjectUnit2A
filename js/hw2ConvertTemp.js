/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 * K Shahbazi
 *
 */

 /********************************************************************
  *
  * First problem: temperature conversion
  *
  * If the values entered by the user aren't numbers (or convertible to numbers),
  * return nothing (or, more specifically, leave the output field blank)
  *
  ********************************************************************/

 var convertCtoF = document.getElementById("degC");
 convertCtoF.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
                var degreesC = document.getElementById("degC").value; // this is the value from the form field

                // your calculations go here. You'll start with the variable degreesC, convert it to Fahrenheit
                // and place the result in the variable 'degreesF'
                
                // first check to see if value from form input box is a number, i.e. not isNaN
                if(!isNaN(degreesC)){
                    // we need to reset the CSS color of the input box 
                    // just in case the previous entry was invalid 
                    // (see else clause further below)
                    convertCtoF.style.color = 'Black';
                    
                    // do our conversion/calculation >> °C x 9/5 + 32 = °F
                    var degreesF = (degreesC*(9/5)+32).toFixed(1); // use function toFixed() to prevent several decimals from outputting
                    
                    // for test purposes
                    console.log((degreesC*(9/5)+32).toFixed(0));

                    // now we write the result to the page
                    document.getElementById("degFOut").innerHTML = degreesF;
                }
                // else inform, through CSS styling that the entry in not valid/acceptable
                else
                {
                    convertCtoF.style.color = 'Red';
                    convertCtoF.value = "Invalid";
                    document.getElementById("degFOut").innerHTML = "";
                     
                }
 };

 var convertFtoC = document.getElementById("degF");
 convertFtoC.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
                var degreesF = document.getElementById("degF").value; // this is the value from the form field

                // your calculations go here. You'll start with the variable degreesF, convert it to Celsius
                //  and place the result in the variable 'degreesC'
                
                // first check to see if value from form input box is a number, i.e. not isNaN
                if(!isNaN(degreesF)){
                    // we need to reset the CSS color of the input box 
                    // just in case the previous entry was invalid 
                    // (see else clause further below)
                    convertFtoC.style.color = 'Black';
                    
                    // do our conversion/calculation >> (°F - 32) x 5/9 = °C
                    var degreesC = ((degreesF-32)*(5/9)).toFixed(1); // use function toFixed() to prevent several decimals from outputting
                    
                    //for test purposes
                    console.log(((degreesF-32)*(5/9)).toFixed(0));

                    // now we write the result to the page
                    document.getElementById("degCOut").innerHTML = degreesC;
                }
                // else inform, through CSS styling that the entry in not valid/acceptable
                else
                  {
                    convertFtoC.style.color = 'Red';
                    convertFtoC.value = "Invalid";
                    document.getElementById("degCOut").innerHTML = "";
                               
                  }
   
   
 };