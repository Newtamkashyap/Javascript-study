//6. Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

function throwCustomeErrors(str) {
    console.log("string value is",str);
    if (str === "") {

        throw "Error because string is empty";

    }


}
// if(num1===undefined){
//     console.log("number is",num1);

//     let x;

//     try {
//         x = num1[5];
//     }
//     catch (err) {
//         console.error("Error newtam", err.message)
//         throw "Error"+ err.message;


//     }
//     console.log("mesage1");
//     return num2+x;
// }
// console.log(throwCustomeErrors(undefined,10));
throwCustomeErrors("");




