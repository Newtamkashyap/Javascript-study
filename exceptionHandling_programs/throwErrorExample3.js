/* 5. Write a JavaScript function that takes an array as a parameter and throws
 a custom 'Error' if the array is empty.*/

function throwCustomeErrors(arr) {
  console.log("Array length is",arr.length);
        if (arr.length==0) {

            throw "array is empty";
        }
        
}
 throwCustomeErrors([]);
 throwCustomeErrors(["1", "2", "3", "5"]);