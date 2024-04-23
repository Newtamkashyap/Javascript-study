/*33. Write a JavaScript program to check whether two numbers 
are in the range 40..60 or 70..100 inclusive.  */

function checking_number(a, b) {
    if((a >= 40 && a <= 60 || a >= 70 && a <= 100) || (b >= 40 && b <= 60 || b >= 70 && b <= 100)) {
            console.log("true");
    }
         else{

            console.log("numbers are not in range ")

         }

    
}
checking_number(40, 55);