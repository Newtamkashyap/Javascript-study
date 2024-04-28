/*5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, 
it checks if the current number is odd or even, and displays a message on the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even" */

function diplayEvenOddNumbers(num){
    if(num%2==0){
        console.log(`${num} is even`);

    }
    else{
        console.log(`${num} is odd`)
    }
}
diplayEvenOddNumbers(2);
diplayEvenOddNumbers(0);
diplayEvenOddNumbers(1);
diplayEvenOddNumbers(3);
diplayEvenOddNumbers(4);


