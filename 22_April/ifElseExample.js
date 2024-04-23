/*18. Write a JavaScript program to check a pair of numbers and 
return true if one of the numbers is 50 or if their sum is 50.  */

function pairOfNumber(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return "true";
    }
    else {
        return "false";
    }
}
console.log("print line number1=",pairOfNumber(10, 30));//false
console.log(pairOfNumber(20, 30));//true
console.log(pairOfNumber(10, 50));//true
console.log(pairOfNumber(50, 30));//true
console.log(pairOfNumber(50, 50));//true
