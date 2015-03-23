/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 * K Shahbazi
 *
 */


 /********************************************************************
  *
  * Third problem: Splitting a String
  *
  ********************************************************************/


  var splitName = document.getElementById("splitName");
splitName.onclick = function(){

               var fullname = document.getElementById("fullName").value;
               
               // get rid of empty spaces at the front or end of name
               fullname = fullname.trim();

               // use String split() function, passing " " space to delineate names
               var splitted = fullname.split(" "); 
               
               /*
                *  We've gotten the fullname from the HTML form field.
                *  Your job is to use the String.slice(), String.substring() or String.substr() functions
                *  to divide your name into separate first and last name strings and assign
                *  them to the variables provided. You may
                *  need String.indexOf() as well.
                *
                *  You may not hardcode the position of where to split the string. Your code should
                *  work for anyone's first and last name. If the user enters a name without any whitespace
                *  return that as firstname and leave lastname blank.
                *
                *  If a name has more than one whitespace (as in, using one or more middle names),
                *  make the first name 'firstname' and assign the rest to 'lastname'
                *
                **/

               var firstname = splitted[0];
               var lastname =" ";

               if(splitted.length > 2){
                  for(var i = 1; i < splitted.length; i++)
                  {
                    lastname += splitted[i]+ " ";
                  }
               }else{
                if (splitted[1] === undefined){
                  lastname = "";
                }else{
                  lastname = splitted[1];
                }
               }
               
               document.getElementById("firstname").innerHTML = firstname;
               document.getElementById("lastname").innerHTML = lastname;


}