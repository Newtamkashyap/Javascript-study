/*3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 
'Error' if the second number is zero.*/

function throwCustomeErrors(num1, num2) {
    console.log("input number is", num1, num2);

    if (num2 == 0) {
        throw "second number is zero";

    }





}
throwCustomeErrors(20, 4);
// throwCustomeErrors(1, 0);
// throwCustomeErrors("Line3 Error"+0,0);
// throwCustomeErrors("Line4 Error"+1,8)
// throwCustomeErrors("Line5 Error"+0,4)