//6. Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

function throwCustomeErrors(str){
    try{
        if(str===""){
            throw "Error"

        }
    }
    catch(error){
        console.log("str")
    }
}
throwCustomeErrors("hello");