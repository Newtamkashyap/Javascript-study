/*5. Write a JavaScript function that accepts a string as a parameter and converts the first
letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

function convertFirstLetter_in_uppercase(str){
    if(str==str.toLowerCase()){
        
        console.log(str.toUpperCase())
    }
else{
    console.log("not in lower case");
}
}
convertFirstLetter_in_uppercase("the quick brown fox");
convertFirstLetter_in_uppercase("THE QUICK BROWN FOX");

