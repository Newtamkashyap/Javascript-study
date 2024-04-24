// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function findLeapYear(year){
    const leap=new Date(year,1,29).getDate()===29;
    
    if(leap){
        console.log(year + "is leap year");
    }
    else{
        console.log(year + "is not leap year");
    }
}
// findLeapYear(2024)

console.log(new Date(2024,1,29).getDate());






