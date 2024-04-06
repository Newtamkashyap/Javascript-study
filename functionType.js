//NOTE:-
/*
Q1- What is Function?
Ans- Function is a block of code designed to perform a particular task.

Q2- Why function is required?
Ans- Function is required to make program efficient and optimised.
     It is a technique to write re-executable code and re-usable code,like variable.
*/

//function and types

//function declaration 
//function keyword + function name + parenthensis + body + return keyword

//function can be of two types: [void,non-void]
/* 
void- void means nothing.
======================================
if a function doesn't has [return] keyword.
or [return] keyword with no value.
it means it is a void type function.
*/
function click() {

}

function clickButton() {
    return;
}



/*
non-void- non void means something/anything.
if a function has [return]keyword + any value/references, it means it is a non-void type function.*/





function getSalary() {
    //it can have more than one line of code.
    return "john";
}

//function uses or calling or execution,//functionName + parenthesis;

getSalary();

