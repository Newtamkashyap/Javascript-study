class Mobile{
    mobileName;
    mobileColor;
    mobileCamera;
    mobileHeight;
    mobileWidth;
    mobileFlashLight;
}

/* new Mobile()
console.log(new Mobile())
console.log(new Mobile)

//OR

 let mobile=new Mobile();
console.log(mobile)*/

class Resturant{
    menu="Vegitarian";
    foodItem1="Biryani";
    foodItem2="curry_Chawal";
    foodItem3="Rajma_Chawal";
    foodItem4="Panner";
    foodItem5="Paneer_Tikka";

    VegItems(){
        console.log("not available")
        return "out of stock";
    }


    nonVegItems(){
        console.log("available")
        return "In Stock";
    }

    
    
}
let resturant1=new Resturant();
console.log("resturant1_Menu",resturant1.foodItem4);//getting the value
resturant1.foodItem2="Dum_Biryani"//setting the value
// console.log(resturant1)

let resturant2=new Resturant();
console.log("Resturant2_Menu",resturant2)


let resturant3=new Resturant();
resturant3.menu="Non-Vegitarian";
console.log(resturant3.menu)

resturant3.foodItem1="Chicken";
console.log(resturant3.foodItem1)

resturant3.foodItem2="Fish";
console.log(resturant3.foodItem2)

resturant3.foodItem3="Mutton";
console.log(resturant3.foodItem3)

resturant3.foodItem4="Egg";
console.log(resturant3.foodItem4)

resturant3.foodItem5="Prawns";
console.log(resturant3.foodItem5)

console.log(resturant1.VegItems())
console.log(resturant2.nonVegItems())






