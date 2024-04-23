/*35. Write a program to check whether a specified character exists
 between the 2nd and 4th positions in a given string.*/

//Q-test case
function checkingCharacter(){
    const str="Newtam";
    let char="s";
    console.log(str.includes(char));

}
// checkingCharacter();

function checkingCharacter(str){
    let char="T";
    console.log(str.includes(char,3))

}
checkingCharacter("NEWTAM");

