//6. Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

function throwCustomeErrors(num1, num2) {
    // try{
    //     if(str===""){
    //         throw "Error because string is empty";

    //     }
    // }
    // catch(error){
    //     console.log(str,"exception raised.",error)
    // }

    // if(num1===undefined){
    //     console.log("number is",num1);
    // }
    let x;

    try {
        x = num1[5];
    }
    catch (err) {
        console.error("Error newtam", err.message)
        throw "Error"+ err.message;
    

    }
    console.log("mesage1");
    return num2+x;
}
console.log(throwCustomeErrors(undefined,10));
console.log(throwCustomeErrors([1,2,3,4,5,6],10));



