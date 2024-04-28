/*7. Write a JavaScript program that uses a try-catch block to catch and handle a 
'RangeError' when accessing an array with an invalid index.*/
var arr=[1,2,3,4,5];
function handlingRangeError(arr) {
   console.log("array");
   
    try {
        if (element==arr[index]) {
            console.log("accessing an array with index")
            throw " parameter is out of its valid range."
        }
    }
    catch (error) {
        console.error("you are accessing an array with an invalid index.",error.message)

    }
}
handlingRangeError(arr[0]);