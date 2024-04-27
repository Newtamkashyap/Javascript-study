/* 5. Write a JavaScript function that takes an array as a parameter and throws
 a custom 'Error' if the array is empty.*/

function throwCustomeErrors(num1) {
    try {
        let arr=[""];
        if (num1=arr) {
            throw "array is empty";
        }
        
    }
    catch (error) {
        console.log("exception raised", error);
    }


}
throwCustomeErrors([]);
throwCustomeErrors(["1", "2", "3", "5"]);