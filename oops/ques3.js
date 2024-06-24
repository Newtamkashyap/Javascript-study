/*. Write a JavaScript program that creates a class called 'Vehicle' with properties 
for make, model, and year. Include a method to display vehicle details. Create a 
subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional
 property for the number of doors. Override the display method to include the number 
 of doors. */

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    vehicleDetails() {
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);

    }

}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super.vehicleDetails(make, model, year);
        this.doors = doors;

    }
    vehicleDetails() {
        super.vehicleDetails();
        console.log(this.doors)

    }
}
const obj = new Vehicle("mahindra", "m-25", 2000);
console.log("vehicle Datails")
obj.vehicleDetails();

const car = new Car("fort", "f-25", 2000, 4)
console.log("vehicle Datails")
car.vehicleDetails();



  