function deepCopyExample(){

    let employee={
        ename:"newtam",
        eid:10,
        estate:"bihar",
        ephone:9876543212
    }

    console.log(employee)

    let newEmployee=JSON.parse(JSON.stringify(employee))
    newEmployee.ename="sanu";
    employee.ename="janu"
    console.log(employee)
    console.log(newEmployee)
}
deepCopyExample()