/*3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 
'Error' if the second number is zero.*/

function throwCustomeErrors(num1, num2) {
    try {
        if (num1 >= 0 && num2 > 0) {
            throw "true";
        }
    }
    catch (error) {
        console.log("Number should be greater than zero");
    }



}