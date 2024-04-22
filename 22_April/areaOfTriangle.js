// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function findAreaOfTriangle(){
    let side1=5;
    let side2=6;
    let side3=7;
    // formula of semi perimeter of triagngle
    const side=(side1+side2+side3)/2;
    // heron's formula to find area of trangle;
    let areaOfTriangle=Math.sqrt(side * ((side - side1) * (side - side2) * (side - side3)));
    console.log(areaOfTriangle)
}
findAreaOfTriangle()