class Employee {
    empName;
    empId;
    empMobileNumber;
    empState;

    constructor(names, id, number, state) {
        this.empName = names;
        this.empId = id;
        this.empMobileNumber = number;
        this.empState = state

    }
}
function employeeDetails() {
    let employee = new Employee("john", 10, 9876543234, "bihar")
    console.log(employee)
    console.log(employee["empId"])
    console.log(employee.empName)
}

//  employeeDetails()


class Person {
    firstName;
    lastName;
    state;
    age;
    height;

}

function personDetails() {
    let person = new Person()
    person.firstName = "Naresh";
    person.lastName = "Prasad";
    person.age = 50;
    person.height = 5.7;
    person.state = "bihar"

    console.log(person.firstName)
    console.log(person.lastName)
    console.log(person.age)
    console.log(person.height)
    console.log(person.state)

}
// personDetails()



class Train {
    firstClass;
    secondClass;
    thirdClass;
    sleeper;

}

function train_Sheats_Availability() {
    let train = new Train()
    train.firstClass = 5;
    train.secondClass = 20;
    train.thirdClass = 40;
    train.sleeper = 400;

    console.log(train.firstClass)
    console.log(train.secondClass)
    console.log(train.thirdClass)
    console.log(train.sleeper)



}
train_Sheats_Availability()


