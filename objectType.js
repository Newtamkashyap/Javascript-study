class Student {
    name;
    rollNo;
    mobileNo;
    constructor(name, rollNo, mobileNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.mobileNo = mobileNo;
    }
}

function studentDetails() {
    let student = new Student("john", 100, 9876543211);

    console.log(student)

    // below any one of them method we can use to fetch data one by one otherwise directly w ecan fetch all data bu using variable refrence name.
    console.log(student.name)//john
    console.log(student["name"])//john
    console.log(student.rollNo)
    console.log(student["mobileNo"])


}
studentDetails()





