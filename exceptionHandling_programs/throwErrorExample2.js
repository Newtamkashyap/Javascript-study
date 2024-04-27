/*4. Write a JavaScript function that takes a number as a parameter and 
throws a custom 'Error' if the number is negative.*/


function throwCustomeErrors(num1) {
    try {
        if (num1 >= 0) {
            throw "true";
        }
    }
    catch (error) {
        console.log("Number should not be negative");
    }


}
throwCustomeErrors(3)