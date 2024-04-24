class hospital {
    patientName;
    patientAge;
    patientNumber;
    patientRoomNumber;

    doctor1() {
        const doctorname = "Dr.Naresh"
        console.log(doctorname);

    }

    doctor2() {
        const doctorname = "Dr.Suresh"
        console.log(doctorname);

    }

    doctor3() {
        const doctorname = "Dr.Mahesh"
        console.log(doctorname);

    }

    nurse1() {
        const nurseName = "sunita";
        console.log(nurseName);
    }

    nurse2() {
        const nurseName = "gita";
        console.log(nurseName);

    }

    nurse3() {
        const nurseName = "sita";
        console.log(nurseName);

    }

}
let patient1 = new hospital();
console.log("Patient 1 Details :");
console.log("===================================");
console.log("Doctor Assigned to patient 1 :");
patient1.doctor1();
console.log("Nurse Assigned to patient 1 :");
patient1.nurse1();
patient1.patientName = "Newtam";
patient1.patientAge = 24;
patient1.patientNumber = 987654321;
patient1.patientRoomNumber = 101;

console.log(patient1);

let patient2 = new hospital();
console.log("Patient 2 Details :");
console.log("===================================");
console.log("Doctor Assigned to patient 2 :");
patient1.doctor2();
console.log("Nurse Assigned to patient 2 :");
patient1.nurse2();
patient2.patientName = "Kajal";
patient2.patientAge = 26;
patient2.patientNumber = 7987654321;
patient2.patientRoomNumber = 101;

console.log(patient2);

let patient3 = new hospital();
console.log("Patient 3 Details :");
console.log("===================================");
console.log("Doctor Assigned to patient 3 :");
patient1.doctor3();
console.log("Nurse Assigned to patient 3 :");
patient1.nurse3();
patient3.patientName = "Anupam";
patient3.patientAge = 28;
patient3.patientNumber = 8123456781;
patient3.patientRoomNumber = 103;

console.log(patient3);



