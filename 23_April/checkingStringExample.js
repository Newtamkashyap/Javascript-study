/*30. Write a JavaScript program to check whether a string "Script" appears at the 5th 
(index 4) position in a given string. If "Script" appears in the string,
 return the string without "Script" otherwise return the original one.   */

 //Q-how to handle case sensetive 
 //Q-when we dont know the length of a string then how to split string.

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
// console.log(checkingString());

function checkingString(text){
    let str=text.slice(4);
    if(str==="Script"){
        return text.substring(0,4);
    }
    else{
        return text
    }
}
console.log(checkingString("javaScript"));
console.log(checkingString("javaPoint"));
