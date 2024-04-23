//  28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  

function checkingNumber(num1, num2) {

    switch (true) {
        case (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99):
            console.log("true")
            break;

        default:
            console.log("please enter valid number,your number is not in the range between 50 to 99")
    }
}
checkingNumber(500, 590);