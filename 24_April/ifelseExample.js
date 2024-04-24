function hostel(roomAvailability){
    if (roomAvailability>0){
        return (true + "available");

    }
    else{
        return (false +"not available");
    }
}
console.log(hostel(3));
console.log(hostel(0));

