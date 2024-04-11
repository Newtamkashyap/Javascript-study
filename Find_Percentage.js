function studentDetails() {
    let mathMarks = 70;
    let scienceMarks = 67;
    let socialMarks = 88;
    let englishMarks = 90;
    let hindiMarks = 80;
    let totalMarks = 500
    let marks = (mathMarks + scienceMarks + socialMarks + englishMarks + hindiMarks)
    let percentage = (marks / totalMarks) * 100
    // console.log(percentage+"%")
    return percentage;


}
//  console.log("Student Percentage="+studentDetails()+"%" )

/*=========================================================================*/

function findStudentDetails(mathMarks, englishMarks, socialMarks, scienceMarks, hindiMarks) {
    let totalMarks = 500;
    let marks = (mathMarks + englishMarks + socialMarks + scienceMarks + hindiMarks)
    let percentage = (marks / totalMarks) * 100

    return percentage;
}
//  console.log("Rohan's Totalmarks Percentage=",findStudentDetails(70, 67, 80, 90, 88)+"%")
//  console.log("Mohan's Totalmarks Percentage=",findStudentDetails(90, 67, 60, 90, 81)+"%")


function getStudentDetails(hindiMarks, scienceMarks, socialMarks, mathMarks, englishMarks) {
    let marks = (hindiMarks + scienceMarks + socialMarks + mathMarks + englishMarks)
    let totalMarks = 500;
    let percentage = (marks / totalMarks) * 100

    if (percentage >= 50) {

        console.log(percentage + "%")
        return "pass";

    }
    else {
        console.log(percentage + "%")
        return "fail"
    }

}
// console.log("percentage=", getStudentDetails(8, 45, 60, 70, 80))


function getStudentMarksDetails(hindiMarks, mathMarks, scienceMarks, socialMarks, englishMarks) {
    let details = []

    let totalMarks = 500;
    let obtainedMarks = (hindiMarks + scienceMarks + socialMarks + englishMarks + mathMarks)
    let percentage = (obtainedMarks / totalMarks) * 100
    console.log(percentage)
    let obj={hindiMarks:hindiMarks,englishMarks:englishMarks,mathMarks:mathMarks,scienceMarks:scienceMarks,socialMarks:socialMarks}
    let obj1={hindiMarks:90,englishMarks:80,mathMarks:33,scienceMarks:40,socialMarks:60}

    details.push(obj)
    details.push(obj1)
    // details.push({name:"English",marks:englishMarks})
    // details.push({name:"social",marks:socialMarks})
    // details.push({name:"science",marks:scienceMarks})
    // details.push({name:"hindi",marks:mathMarks})



   
   

    // console.log(details.length)

    return details;

}

// console.log(getStudentMarksDetails(8, 9, 30, 40, 50))
//  console.log(getStudentMarksDetails(80, 90, 60, 40, 50))

//  hindi-30,science-50,social-60,math-70,english-88


function getStudentMarksDetails1(hindiMarks, scienceMarks, socialMarks, englishMarks, mathMarks) {
    let detail = []

    let totalMarks = 500;
    let marks = (hindiMarks + scienceMarks + socialMarks + englishMarks + mathMarks)
    let percentage = (marks / totalMarks) * 100
    let data={mark:hindiMarks,name:"Hindi"}
    let data1={mark:englishMarks,name:"English"}
    let data2={mark:scienceMarks,name:"Science"}
    let data3={mark:socialMarks,name:"Social"}
    let data4={mark:mathMarks,name:"Math"}
    detail.push(data)
    detail.push(data1)
    detail.push(data2)
    detail.push(data3)
    detail.push(data4)
    console.log(percentage + "%")
    
    return detail;

}


//  console.log(getStudentMarksDetails1(1,2,3,4,5))
//  console.log(getStudentMarksDetails1(19,42,53,64,75))
let detail=getStudentMarksDetails1(1,3,5,6,7);
 for(i=0;i<detail.length;i++){
    console.log(detail[i].name+detail[i].mark)
    

 }



