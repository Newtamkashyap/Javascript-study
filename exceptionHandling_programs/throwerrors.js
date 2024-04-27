/* 1. Write a JavaScript function that takes a number as a parameter and
 throws a custom 'Error' if the number is not an integer.*/

function throwCustomeErrors(num) {
   
        console.log("printing type of num is", typeof num);
        if (typeof num == "number") {
            console.log("integer");
        }
        else{
            throw "number is not an integer";
        }

    }
    
 
//  throwCustomeErrors(8);
// throwCustomeErrors("nnn");
throwCustomeErrors([1]);
// throwCustomeErrors();


// throwCustomeErrors('');
// console.log(throwCustomeErrors(6));
