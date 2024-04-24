class hospital {
    patientName;
    patientAge;
    patientNumber;
    patientRoomNumber;
    patientStage="critical";

    doctor1() {
        const doctorname = "Dr.Naresh"
        let PhysioDoctor="physician";

        console.log(doctorname);
        console.log(PhysioDoctor);

    }

    doctor2() {
        const doctorname = "Dr.Suresh"
        let nueroDoctor="neuroSpecialist";

        console.log(doctorname);
        console.log(nueroDoctor);


    }

    doctor3() {
        const doctorname = "Dr.Mahesh"
        let heartDoctor="heartSpecialist";

        console.log(doctorname);
        console.log(heartDoctor);

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
console.log("-----------------------------------")
let patient1 = new hospital();
console.log("Patient 1 Details :");
console.log("===================================");
console.log("Doctor Assigned to patient 1 :");
patient1.doctor1();

console.log("Nurse Assigned to patient 1 :");
patient1.nurse1();
patient1.patientName = "Mohan";
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
patient2.patientName = "Rohan";
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
patient3.patientName = "Sohan";
patient3.patientAge = 28;
patient3.patientNumber = 8123456781;
patient3.patientRoomNumber = 103;

console.log(patient3);



