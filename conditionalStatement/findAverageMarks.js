/*6. Write a JavaScript program that computes the average marks of the following students.
 Then, this average is used to determine the corresponding grade.

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows :

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A */
 function find_avergae_marks_of_students(marks){
    if(marks<60){
        console.log("E grade");
    }
        else if(marks<70){
            console.log(" D gradee");

        }
        else if(marks<80){
            console.log("C grade");
        }
        else if(marks<90){
            console.log("B grade");
        }
        else{
            console.log("A grade");
        }
    }
    find_avergae_marks_of_students(80);
    find_avergae_marks_of_students(77);

    find_avergae_marks_of_students(88);

    find_avergae_marks_of_students(95);

    find_avergae_marks_of_students(68);





 