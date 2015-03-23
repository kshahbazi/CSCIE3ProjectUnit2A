/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 * K Shahbazi
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

var myFibs = [0, 1]; // seed my array
var tracker= 1; // I already have one even, i.e. '0' is in myFibs array
var sum = 0; // the total that'll be returned

 function twelveEvenFibonacciSum(){
 /// WRITE YOUR CODE HERE
	console.clear();

	    // outer for loop to set the next iteration of the numbers
	    // tracker will be incremented only when an even number encountered
	    for (var i= 2, j = 0; tracker <= 12 ; j++, i++) {
	        // assign the next element of myFibs array
	        // to the summ of the previous two, e.g 1 = 1 + 0 , 2 = 1 + 1 etc...
	        myFibs[i] = myFibs[i-1] + myFibs[i-2];    
	        
	        // use modulus to sift the even numbers 
	        // and add only those numbers for a sum 
	        // use the j variable to start from the beginning of myFibs array
	        if (myFibs[j]%2 == 0)
	        {
	           // add the array element to the sum
	           sum +=  myFibs[j];

	           // console output for testing/confirmation
			   console.log("Tracker "+tracker+ ", next even Fibonacci number: "+ myFibs[j].toLocaleString()+" the sum is "+sum);
	           
	           // increment tracker
	           tracker++;
	        }
	    }

	// console output for testing/confirmation
	console.log(myFibs);
	console.log("There are "+myFibs.length+" items in my Fibonacci array");
	console.log("The sum of the first twelve even Fibonacci numbers is: " +sum.toLocaleString());

	// return sum (format for better legibility)
	return sum.toLocaleString();
 }