/* 1. Write a JavaScript function that takes a number as a parameter and
 throws a custom 'Error' if the number is not an integer.*/

function throwCustomeErrors(num) {
    try {
        if (isInteger()=== num) {
            console.log("integer");
            // throw "integer"
        }
    }
    catch (error) {
        console.log( "not an integer number",error);

    }

    }
 throwCustomeErrors(8);
    // console.log(throwCustomeErrors(6));
