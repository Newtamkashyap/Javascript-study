/*30. Write a JavaScript program to check whether a string "Script" appears at the 5th 
(index 4) position in a given string. If "Script" appears in the string,
 return the string without "Script" otherwise return the original one.   */

function checkingString() {
    const name = "JavaScript";
    let str=name.slice(4);

    if(str==="Script"){
        return str;
    }
    else{
        return name;
    }
   
}
console.log(checkingString());