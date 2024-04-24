//82. Write a JavaScript program to add two positive integers without carrying. 
function add_two_positive_integer(a, b) {
    let sum = a + b;
    if ((a > 0) && (b > 0)) {
        return sum;
    }
    else {
        return "please enter only positive numbers"
    }



}
console.log(add_two_positive_integer(0, 0))