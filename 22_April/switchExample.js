function trafficRuels(){
    let trafficLight = "green";

 
switch (trafficLight) {
    case "red":
        console.log("Stop immediately.") ;
        break;
    case "yellow":
        console.log("Prepare to stop.");
        break;
    case "green":
        console.log("Proceed or continue driving.");
        break;
    default:
       console.log("Invalid traffic light color.");
}
}
trafficRuels()
