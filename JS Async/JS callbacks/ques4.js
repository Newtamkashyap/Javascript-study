

function myDisplayer(args){
    console.log(args)
}

function myCalculation(num1,num2,myCallback){
    let multiply=num1*num2;
    myCallback(multiply);
}

myCalculation(10,10,myDisplayer)