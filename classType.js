// class Subject {

//     name;
//     marks;
//     publishYear;

// }

function testClass() {
    let arrObj1 = [];
    // let subject = new Subject();//Subject { name: undefined, marks: undefined }
    let subject1 = { name: "hindi", marks: 80 }//{ name: 'hindi', marks: 80 }
    let subject2 = { name: "english", marks: 70, publishYear: 2033, passout: 2023 }
    let subject3 = { name: "science", marks: 86, publishYear: 2023, passout: 2023 }
    let subject4 = { name: "social", marks: 87, publishYear: 2023, passout: 2023 }
    let subject5 = { name: "math", marks: 90, publishYear: 2023, passout: 2023 }
    // let arrObj = [subject1,subject2,subject3,subject4,subject5]
    arrObj1.push(subject1)
    arrObj1.push(subject2)
    arrObj1.push(subject3)
    arrObj1.push(subject4)
    arrObj1.push(subject5)

    return arrObj1;

}
var marksArray = testClass()
console.log(marksArray.length)
for (i = 0; i < marksArray.length; i++) {
    console.log(marksArray[i].name + marksArray[i].marks)


}


