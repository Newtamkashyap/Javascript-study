//====================example1==================//

function sayHello() {
    return "hello" + " " + this.name;
}
var obj = { name: "sunny" };
console.log(sayHello.call(obj));


//===================example2====================//
var person1 = {
    age: 23,
    getAge: function () {
        return this.age;
    }
}

var person2 = {
    age: 54
};
console.log(person1.getAge.call(person2));




//===================example3====================//

function saySomething(msg){
    return this.name + " is " + msg;
}
var person1={name:"john"};
console.log(saySomething.call(person1,"awesome"));