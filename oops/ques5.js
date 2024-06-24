
/*5. Write a JavaScript program that creates a class called 'Shape' with a method to
  calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit 
  from the 'Shape' class and override the area calculation method. Create an instance
  of the 'Circle' class and calculate its area. Similarly, do the same for the 
 'Triangle' class. */


 class Shape{
   
    calculate_Area(){


    }

 
 }

 class Circle extends Shape{

    constructor(radius){
        super();
        this.radius=radius

    }
    calculate_Area(){
        return Math.PI*this.radius * this.radius;

    }
 }

 class Triangle extends Shape{
    constructor(base,height){
        super();
        this.base=base;
        this.height=height;
    }
    calculate_Area(){
        return 1/2*this.base*this.height
    }
   

 }

 const circleObj=new Circle(2);
 const circleArea=circleObj.calculate_Area()
 console.log("circle of area :",circleArea)


 const triangleObj=new Triangle(6,10);
 const triangleArea=triangleObj.calculate_Area();
 console.log("triangle of area :",triangleArea)

