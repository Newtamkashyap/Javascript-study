
const arr=["newtam","kajal","anupam","ashish","surila"]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
arr.push("poonam");
console.log(arr)

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//----------------------------------
const arr1=new Array(1,2,3,4,5);
console.log(arr1[3]);

const cars=['bmw','volvo','saab']
// let car=cars;

console.log(cars)
cars[3]="fort";
console.log(cars)

//--------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
const fifthElement = numbers[4]; 
console.log(fifthElement); 

//------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length)

//-----------------------------------
const fruitsname = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruitsname[fruitsname.length - 1];
console.log(fruit)


//-----------------------------------
const person = [];
person["fn"] = "newtam";
person["ln"] = "kashyap";
person["age"] = 26;
person.length;     
person[0];  
console.log(person)

//----------------------------
// const cars=['bmw','volvo','saab']
// let type = typeof cars;
// console.log(type)

//----------------------------------------

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  //--------------------------------------
  const fruitName = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruitName.toString())

  //-------------------------------------------------
const name=["newtam","kajal","anupam","ashish","surila"]
console.log(name.join(" * "))


//----------------------------------------
const personname=["newtam","kajal","anupam","ashish","surila"]
console.log(personname.pop());


//----------------------------------------
const student=["newtam","kajal","anupam","ashish","surila"]
console.log(student.push("poonam"));


//------------------------------------
const stud=["newtam","kajal","anupam","ashish","surila"]
let studs=stud.shift()
console.log(studs);

//------------------------------------------
const stud1=["newtam","kajal","anupam","ashish","surila"]
let studs1=stud1.unshift("shreya")
console.log(studs1);

//--------------------------------------
const transport=['van','bus','volvo','train']
transport[transport.length]='flight'
console.log(transport)

//--------------------------------------------
const fn=["Newtam","Kasjal"];
const ln=["kasyyap","yadhuvanshi"];
const fullName=fn.concat(ln);
console.log(fullName)//merging two array

//-------------------------------------------
const transport1=['van','bus','volvo','train']
const trans=transport1.slice(1);
console.log(trans)


//-------------------------------------------
const transport2=['van','bus','volvo','train']
const trans1=transport2.slice(1,3);
console.log(trans1)


//------------------------------------------
const nameOfFood = ["Apple", "Orange", "Apple", "Mango"];
let position = nameOfFood.indexOf("Apple") + 1;
let position1 = nameOfFood.lastIndexOf("Apple") + 1;


console.log(position);
console.log(position1);


//-----------------------------------------
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
 
  const names = users.map(user => user.name);
  console.log(names);


  //------------------------------------------
  const num = [1, 2, 3, 4, 5];


const evenNumbers = num.filter(num => num % 2 === 0);

console.log(evenNumbers);


//------------------------------------------
const number = [1, 2, 3, 4, 5];


const sumOfSquares = number
  .filter(num => num % 2 === 0) 
  .map(num => num * num)       
  .reduce((acc, curr) => acc + curr, 0); 

console.log(sumOfSquares); 


//---------// Using spread to combine objects-------------------------------
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };


const merged = { ...obj1, ...obj2 };

console.log(merged);


//-----------------------------------
function example() {
    var myName = "I'm Newtam";
    console.log(myName);
}

example();
