class hospital {
    patientName;
    patientAge;
    patientNumber;
    patientRoomNumber;
    patientStage;

    doctorDetails(doctorName, specialist) {
        return [doctorName, specialist];
    }
    nurseDetails(nurseName) {
        return nurseName;
    }
}
console.log("***********************************")
let patient1 = new hospital();
console.log("Patient 1 Details :");
console.log("===================================");
console.log("Doctor Assigned to patient 1 :", patient1.doctorDetails("shyresh", "kidneyspecialist"));
console.log("Nurse Assigned to patient 1 :", patient1.nurseDetails("Divya"));
patient1.patientName = "Mohan";
patient1.patientAge = 24;
patient1.patientNumber = 987654321;
patient1.patientRoomNumber = 101;
patient1.patientStage = "critical";
console.log(patient1);

let patient2 = new hospital();
console.log("Patient 2 Details :");
console.log("===================================");
console.log("Doctor Assigned to patient 2 :", patient2.doctorDetails("Rupa", "heartspecialist"));
console.log("Nurse Assigned to patient 2 :", patient2.nurseDetails("Riya"));
patient2.patientName = "Rohan";
patient2.patientAge = 26;
patient2.patientNumber = 7987654321;
patient2.patientRoomNumber = 101;
patient2.patientStage = "Normal";
console.log(patient2);

let patient3 = new hospital();
console.log("Patient 3 Details :");
console.log("===================================");
console.log("Doctor Assigned to patient 3 :", patient3.doctorDetails("Jony", "neurospecialist"));
console.log("Nurse Assigned to patient 3 :", patient3.nurseDetails("Pooja"));
patient3.patientName = "Sohan";
patient3.patientAge = 28;
patient3.patientNumber = 8123456781;
patient3.patientRoomNumber = 103;
patient3.patientStage = "critical";
console.log(patient3);



