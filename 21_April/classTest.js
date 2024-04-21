class Mobile {
    mobileColor = "white";
    mobileWidth = 30;
    mobileHeight = 80;
    mobileCamera = 3;
    mobileTorch = 1;
    mobileName = "iphone";

    callMe(){
        console.log("call me")
        return "calling";

    }




}

class Laptop {
    laptopName;
}

let mobile = new Mobile();/* {
    mobileColor: undefined,
    mobileWidth: undefined,
    mobileHeight: undefined,
    mobileCamera: undefined,
    mobileTorch: undefined,
    mobileName: undefined
  }*/
let mobile1 = new Mobile();



mobile1.mobileName="Nokia";
mobile1.mobileColor="black";
mobile1.mobileCamera=2;


console.log("printing mobile1",new Mobile())


let mobile2 = new Mobile();
console.log("printing mobile2",mobile2)
console.log("printing mobile",mobile)
let laptop = new Laptop();//{ laptopName: undefined }
console.log(new Laptop())

mobile1.callMe();