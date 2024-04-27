/*4. Write a JavaScript function that takes a number as a parameter and 
throws a custom 'Error' if the number is negative.*/


function throwCustomeErrors(num1) {
   console.log("number is",num1);
        if (num1<0) {
            throw "Negative";
        }
    


}
throwCustomeErrors(0);