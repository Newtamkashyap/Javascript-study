//void type function declaration
function calculateMySalary() {
    let salaryAmount = 10000;

    let taxPercent = 20;
    let taxAmount = taxPercent / 100 * salaryAmount

    let inHandSalary = salaryAmount - taxAmount
    console.log(inHandSalary)
}
//  calculateMySalary()

function calculateMySalary2(salaryAmount) {


    let taxPercent = 20;
    let taxAmount = taxPercent / 100 * salaryAmount

    let inHandSalary = salaryAmount - taxAmount
    console.log(inHandSalary)
}
//  calculateMySalary2(197053)

function calculateMySalary3(salaryAmount, taxPercent) {



    let taxAmount = taxPercent / 100 * salaryAmount

    let inHandSalary = salaryAmount - taxAmount
    console.log(inHandSalary)
}
// calculateMySalary3(197053,20)
// calculateMySalary3(197053,10)





// let i = 1

// while { (i <= 10) {

//     calculateMySalary2(i)
//     i++;//i=i+1
//loop will increment before end


function findIntrest() {
    let principalAmount = 500000;
    let rate = 10;
    let time = 1;
    let simpleIntrest = principalAmount * rate * time / 100
    return simpleIntrest;
}
 console.log(findIntrest())

function getIntrest(pricipalAmt, rt, tm) {
    let simpleIntrest1 = pricipalAmt * rt * tm / 100
    return simpleIntrest1
}
console.log(getIntrest(500000,10,2))


function findAreaOfTriangle() {
    let height = 100;
    let base = 120;
    let areaOfTraingle = 1 / 2 * base * height
    return areaOfTraingle
}
console.log(findAreaOfTriangle())

function getAreaOfTraingle(base, height) {
    let areaOfTraingle = 1 / 2 * base * height
    console.log(areaOfTraingle)
}
// getAreaOfTraingle(100,50)


function getAreaOfTraingle1(base, height) {
    let areaOfTraingle = 1 / 2 * base * height
    return areaOfTraingle
}
console.log(getAreaOfTraingle1(100, 70))

function findAreaOfCircle() {
    // a=pi*r*r
    const pi = 3.14;
    let radius = 5;
    let areaOfCircle = pi * radius * radius
    return areaOfCircle
}
//   console.log(findAreaOfCircle())


function getTemp() {
    //fahrenheit=degree celsius * 9/5 +32
    let degreeCelsius = 41
    let fahrenheit = degreeCelsius * (9 / 5) + 32
    return fahrenheit

}
console.log(getTemp())


function findTemp(degreeCelsius) {
    //fahrenheit=degree celsius * 9/5 +32
    
    let fahrenheit = degreeCelsius * (9 / 5) + 32
    return fahrenheit

}
console.log(getTemp(41))


function Temp() {
    //celsius=fahrenheit-32*5/9
    let fahrenheit=105.8
    let celsius = (fahrenheit -32) *5/9
    return celsius

}
console.log(Temp())








