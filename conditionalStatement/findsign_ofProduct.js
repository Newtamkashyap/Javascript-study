/*2. Write a JavaScript conditional statement to find the sign of the product of three numbers.
 Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -
 */

function findSignOfProduct(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        console.log("Ok,All Signs Are Positive");
    }

    else { 
        console.log("The sign is -")
    }    



}
findSignOfProduct(-3, -7, -2);
findSignOfProduct(3, -7, -2);
findSignOfProduct(3, 7, -2);
findSignOfProduct(3, 7, 2);
findSignOfProduct(-3, 7, -2);
