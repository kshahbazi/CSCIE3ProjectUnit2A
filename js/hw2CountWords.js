/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 * K Shahbazi
 *
 */


 /********************************************************************
  *
  * Fifth problem: Conuting Words
  *
  ********************************************************************/


  var wordCount = document.getElementById("myWordsToCount");
  
  wordCount.onkeyup = function(){

               // getting the actual contents of the textarea
               var words = wordCount.value;

               // to correctly count only the words
               // we'll create and tally all the blanks 
               // that'll be in our array
               var blanks = 0;

               // get rid of empty spaces at the front or end of name
               // seems superfluous
               words = words.trim();

               // use String split() function, passing " " space to delineate words
               var splitWords = words.split(" "); 
               
               // now our array has all the 'words' that are separated by a space
               // however, we need to account for, discount really, multi-space characters
               // that could be part of our array of words, so we loop through it
               for(var i=0; i<splitWords.length;i++){
                  // and if any of those 'words' are less that 1, i.e. ""
                  if(splitWords[i].length < 1){
                      // increment our flag 
                      blanks++;
                  } 
                }
               // subtracting all empty array values from the total length
               document.getElementById("wordcount").innerHTML = splitWords.length-blanks; 
               console.log(splitWords);
               
               
  }