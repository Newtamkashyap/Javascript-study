/*1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

function findCurrentDateTime() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

    const date = new Date();
    
    let day = days[date.getDay()];
    
    console.log("day",date.getDay());//2
    console.log("Today is :", day);
    // let time=date.getTime();


    console.log("Current time is :",date)
    console.log("Current time is :",date.toLocaleTimeString());



}

findCurrentDateTime()