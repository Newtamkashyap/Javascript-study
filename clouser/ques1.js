

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(outerVar + innerVar)

    }

}

const clouserExample = outerFunction(5);
clouserExample(3);


function outer(x) {
    function inner(y) {
        var z = x + y;
        console.log(z)
    }
    inner(100);
}
outer(200);


function userFirstName(firstname) {
    function userLastName(lastname) {
        let fullname = firstname + lastname;
        return fullname;

    }
    console.log(userLastName("Kashyap"))

}
userFirstName(`Newtam` + " ");



function studentDetails(name, age, course, fee) {
    function addMoreDetails(facultyName) {
        return (`Studentname: ${name} , age: ${age} , course: ${course}, Fee: ${fee} ,facultyName: ${facultyName}`);
    }
    console.log(addMoreDetails("Sudhakar Sharma"));
}
studentDetails("newtam", 24, "react", 6000);