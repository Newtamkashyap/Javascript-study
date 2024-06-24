/* 1. Write a JavaScript program to create a class called "Person" with properties for
 name, age and country. Include a method to display the person's details. 
 Create two instances of the 'Person' class and display their details.
 */


class Person {
   
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails(){
        console.log("Name :",this.name)
        console.log("Age :",this.age)
        console.log("country :",this.country)
    }
}
let obj1 = new Person("Newtam",23,"India")
let obj2=new Person("Ashish",29,"India")



console.log("person 1 details")
obj1.displayDetails()

console.log("person 2 details")
obj2.displayDetails()

