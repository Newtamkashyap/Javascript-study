function shallowExmaple(){

let employee={
    eid:1,
    ename:"john",
    ecity:"saharsa",
    esalary:500000
}
console.log("===========print original data===========")
console.log(employee)

let newEmployee=employee;
console.log("===========print 2nd data===========")
console.log(newEmployee)

employee.ename="newtam";
console.log(employee)
console.log(newEmployee)
}
shallowExmaple();