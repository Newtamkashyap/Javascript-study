/*3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 
'Error' if the second number is zero.*/

function throwCustomeErrors(num1, num2) {

    try {

        if (num1 >= 0 && num2 > 0) {
            console.error("true") ;
        }

    }

    catch (error) {
        console.error("exception raised", error);
    }


}
throwCustomeErrors(2,4);
throwCustomeErrors(1,0);
// throwCustomeErrors("Line3 Error"+0,0);
// throwCustomeErrors("Line4 Error"+1,8)
// throwCustomeErrors("Line5 Error"+0,4)