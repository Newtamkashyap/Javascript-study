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


function getStudentMarksDetails(hindiMarks,mathMarks,scienceMarks,socialMarks,englishMarks) {
     let details=[]
   
    // let mathMarks ;
    // let scienceMarks ; 
    // let socialMarks ;
    // let englishMarks;
    // let hindiMarks ;
    let totalMarks = 500;
    let marks = (hindiMarks + scienceMarks + socialMarks + englishMarks + mathMarks)
    let percentage = (marks / totalMarks) * 100
    console.log(percentage)
    details.push()
    
    console.log(details.length)
     
    return details;

}

 console.log(getStudentMarksDetails(8,9,30,40,50))


function getStudentMarksDetails1(hindiMarks ,scienceMarks ,socialMarks ,englishMarks , mathMarks) {
    let detail=[]
    
    let totalMarks = 500;
    let marks = (hindiMarks + scienceMarks + socialMarks + englishMarks + mathMarks)
    let percentage = (marks / totalMarks) * 100
    let dtl=[{hindiMarks:89,englishMarks:90,scienceMarks:78,socialMarks:90,mathMarks:87},{hindiMarks:89,englishMarks:90,scienceMarks:78,socialMarks:90,mathMarks:87}]
    detail.push(dtl)
    console.log(percentage+"%")
    console.log(dtl.length)
    return dtl;

}


//  console.log(getStudentMarksDetails1(1,2,3,4,5))



