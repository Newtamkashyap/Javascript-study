/*6. Write a JavaScript program that creates a class called 'Employee' with properties
 for name and salary. Include a method to calculate annual salary. Create a subclass 
 called 'Manager' that inherits from the 'Employee' class and adds an additional 
 property for department. Override the annual salary calculation method to include 
 bonuses for managers. Create two instances of the 'Manager' class and calculate their
annual salary. */


class Employee {
    name;
    salary;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log("Name of the employee :", name);
        console.log("Salary of the employee :", salary)


    }
    calculateAnnualSalary() {
        return this.salary * 12;

    }
}


class Manager extends Employee {
    constructor(name, salary, empId, empCity) {
        super(name, salary);
        this.empCity = empCity;
        this.empId = empId;
    }

    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = 0.1;

        console.log("Bonus of the salary plus original salary calculation :", bonus)
        return (bonus*baseSalary)
    }

}


const managerObj = new Manager("Newtam",50000,1,"hyd");
const managerSalarys = managerObj.calculateAnnualSalary()
console.log(`manager name ${managerObj.name}`);
console.log(`manager salary ${managerObj.salary}`);
console.log(`manager empId ${managerObj.empId}`);
console.log(`manager empCity ${managerObj.empCity}`);

