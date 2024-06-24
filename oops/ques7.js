/* 7. Write a JavaScript program that creates a class `Book` with properties for title,
author, and publication year. Include a method to display book details. Create a 
subclass called 'Ebook' that inherits from the 'Book' class and includes an additional
property for book price. Override the display method to include the book price. 
Create an instance of the 'Ebook' class and display its details. */

class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    
    }

    bookDetails(){
        console.log(this.title);
        console.log(this.author);
        console.log(this.year);

    }
}

class Ebook extends Book{
    constructor(title,author,year,price){
        super(title,author,year)
        this.price=price;

    }
    bookDetails(){
        super.bookDetails();
        console.log(`price=${this.price}`)

    }

}

const ebookObj=new Ebook("ikigai","xyz",2000,150);
ebookObj.bookDetails()