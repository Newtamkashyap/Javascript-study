/*3. Write a JavaScript conditional statement to sort three numbers.
 Display an alert box to show the results.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

function shorting_a_number(num1, num2, num3) {
    if (num1 > num2 && num3 > num2 && num3 > num1) {
        console.log("sorting three number")
        console.log(num3,num1,num2)
    }
    else {
        console.log("please sort three numbers")
    }

}
shorting_a_number(0, -1, 4);//num3>num1>num2
shorting_a_number(0,-2,3);
shorting_a_number(2,0,5);
shorting_a_number(0,10,9);