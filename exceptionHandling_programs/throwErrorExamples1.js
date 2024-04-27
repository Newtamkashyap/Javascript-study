/*3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 
'Error' if the second number is zero.*/

function throwCustomeErrors(num1, num2) {
    
        if (num1 >= 0 || num2 > 0) {
           
        }
        try{
            throw "true";
        }
    
    catch (error) {
        console.log("num2 also should be greater than zero",error);
    }


}
throwCustomeErrors(0,0);