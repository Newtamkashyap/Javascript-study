function person(){
    // console.log(city);
    console.log(`My state is and i m ${this.name} and  my age is ${this.age}`)

}
const john={
    name:"John",
    age:23,
};
const jane={
    name:"jane",
    age:34,

};
person.call(john)
person.call(jane)
