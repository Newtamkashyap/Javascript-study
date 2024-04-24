function hospital(medicine){
    if(medicine==="Dolo"){
        return true;
    }
    else{
        return false;
    }
}
// console.log(hospital("Dolo"));
// console.log(hospital("paracetamol"));

//else if example

function cityHospital(medicine){
    if(medicine==="dolo"){
        return "dolo is available";

    }
    else if(medicine==="paracetamol"){
        return "paracetamol is available"
    }
    else if(medicine==="seradon"){
        return "seradon is available"
    }
    else{
        return "This medicine is not availbale"
    }


}

console.log(cityHospital("dolo"));
console.log(cityHospital("seradon"));
console.log(cityHospital("flexon"));

