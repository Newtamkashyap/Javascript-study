/*2. Write a JavaScript program to create a class called 'Rectangle' with properties 
for width and height.Include two methods to calculate rectangle area and perimeter.
Create an instance of the 'Rectangle' class and calculate its area and perimeter. */


class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
    areaOfRectangle() {
        return this.width * this.height;

    }
    perimeterOfRectangle() {
        return 2 * (this.width + this.height)

    }
}
let obj1 = new Rectangle(20, 10)

const area = obj1.areaOfRectangle();
const perimeter = obj1.perimeterOfRectangle();

console.log(`Area of rectangle ${area}`)
console.log("Perimeter of rectangle", perimeter)