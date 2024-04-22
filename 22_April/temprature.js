/*11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

function findCelcius(){
    // formula:(°F - 32) x 5/9 =°C
    let f=45;
    let c=(f - 32) * 5/9 ;
    return c;

}
console.log(findCelcius());

function findFahernhite(){
    //formula: (°C x 9/5) + 32 =°F
    let c=60;
    let f= (c * 9/5) + 32
return f;
}
console.log(findFahernhite());
