/*10. Write a JavaScript program that creates a class called Product with properties
for product ID, name, and price. Include a method to calculate the total price by 
multiplying the price by the quantity. Create a subclass called PersonalCareProduct 
that inherits from the Product class and adds an additional property for the warranty 
period. Override the total price calculation method to include the warranty period. 
Create an instance of the PersonalCareProduct class and calculate its total price. */

class Product{
    constructor(ProductId,name,price){
        this.ProductId=ProductId;
        this.name=name;
        this.price=price;

    }

    totalPrice(){

    }
}

class PersonalCareProduct extends Product{

    constructor(){

    }

    totalPrice(){

    }

}