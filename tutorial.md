Date: 12 feb 2024 -day1
=========================================================
Summary
- HTML            Creates DOM
- CSS            Styling DOM
- Bootstrap        Component Library to rapidly build Interactive & Responsive UI.


                                JavaScript

- Javascript is an light weight interpretted and JIT compiled programming language.

- Interpretted language is translated line-by-line.

- Compiled language can translate all lines simultaneously at the same time.

- There are 2 types of compiling techniques

        a) JIT     [Just-In-Time]    
        b) AOT    [Ahead-Of-Time]

- JIT is the process of loading script into browser and translate in browser.

- AOT is the process of translating script before reaching the browser. It is translated at application level, which is faster in rendering.

- JavaScript is a language that supports various programming approaches like functional, structural, imperative, object oriented etc.

- JavaScript is a language, which is used in various implementations

        a) Client Side         with HTML..
        b) Server Side         with Node JS..
        c) Data Base         with MongoDB..
        d) Animations         with Flash, 3DS Max ..

FAQ: What is the role of JavaScript Client Side?
Ans:
- A client side script is responsible to reduce burden on server.
- It manages various interactions client side.
- JavaScript is used client side for:

        a) DOM manipulations
        b) DOM interactions
        c) Validations
        d) Security Management    
        etc..

- DOM Manipulations
        * Adding element into page
        * Removing element from page
        * Updating Data into elements in page [Data Binding]
        * Style Binding
        * Class Binding
        * Event Binding
        etc..
- DOM Interactions
        * Browser Navigator
        * Browser History
        * Browser Location
        * Browser Document
        * Browser Window
- Validations
        * Verifying user input
        * Check for contradictory values
        * Check for unauthorized values
- Security Management
        * CORS  [Cross Origin Resource Sharing]
        * XSRF   [Cross Site Request Forgery]
        * XSS     [Cross Side Scripting Attacks]

Evolution of JavaScript:

- The first client side script is ECMA Script built by CERN labs.
- Mosaic is the first browser for internet that used  ECMA Script.
- In early 1995  Netscape developed a browser "Netscape Communicator"
- Netscape appointed "Brendan Eich" to develop a client side script for its browser.
- Brendan Eich named the script as "Mocha" and later changed to "Live Script".
- Netscape given the responsibility of Live Script to a company called "Sun Microsystems".
- Netscape and Sun Microsystems renamed Live Script as "JavaScript".
- In early 2000 Netscape given the responsibility of JavaScript to ECMA.
  [Netscape closed its services in 2000]
- JavaScript standards & evolution is under the control of ECMA.

            ES 4        [ECMA Script 2014]
            ES 5
            ES 6 *
            ....
            ES 22
            ES Next



Date: 13 feb 2024 -day2
=========================================================    

Features of JavaScript:
- Reduces burden on server
- Manipulates DOM
- Handles DOM interactions
- JIT & AOT compiled
- Interpretted
- Supports various programming approaches
- Lightweight

Issues with JavaScript:
- It is not strongly typed language.
- It is not strictly typed.
- Lot of code inconsistancy.
- Lot of DOM methods and Coding is required.
- Heavy on application
- Not good in security
- It is not an OOP language.
- Not easy to extend.
- Not good in code level security.

Note: "TypeScript" is an alternative for JavaScript but not replacement.

Integrating JavaScript into a Web Page:
- JavaScript functions can be
    1. Inline
    2. Embedded
    3. From External File

Inline JavaScript
- The Javascript functions are defined within the element.
- They are native to element and faster in execution.
- However they are not good for reusability.

Syntax:
    <button  onclick="window.print()">  Print </button>

Embedded JavaScript
- The Javascript functions are defined using  <script> container.
- It can be embedded into <head> or <body> section.
- It can be reused and separated from design.
- JavaScript functions are defined using a function refactor.

Syntax:
    <head>
      <script>
        function  Name()
        {
        }
      </script>
    </head>
   
    <button onclick="Name()">  Click </button>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function PrintTicket()
        {
            window.print();
        }
    </script>
</head>
<body>
    <h1>Ticket</h1>
    <p>Click Print Button to Print your ticket.</p>
    <button onclick="PrintTicket()">Print</button>
</body>
</html>

- The MIME type of <script> is  "text/javascript".

Syntax:
        <script type="text/javascript">  </script>
        <script language="javascript"> </script>

FAQ: What is strict mode? How to set strict mode?
- Strict is about following the programming standards and rules.
- JavaScript is not implicilty strict.
- You have turn the strict mode ON by using the statement "use strict".

Syntax:
    <script type="text/javascript>
        "use strict";
        function Name()
        {
        }
    </script>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        "use strict";
        function PrintTicket()
        {
            window.print();
        }
    </script>
</head>
<body>
    <h1>Ticket</h1>
    <p>Click Print Button to Print your ticket.</p>
    <button onclick="PrintTicket()">Print</button>
</body>
</html>

FAQ: How to target Javascript functions for legacy browsers?
Ans:  By enclosing the Javascript function within HTML comments.

        <!--
            function() Name        
             {
             }
        -->

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        "use strict";
        <!--
            function PrintTicket()
            {
                window.print();
            }    
        -->
    </script>
</head>
<body>
    <h1>Ticket</h1>
    <p>Click Print Button to Print your ticket.</p>
    <button onclick="PrintTicket()">Print</button>
</body>
</html>
       
FAQ: How to check the status of Javascript in browser?
Ans: By using HTML element <noscript>. It can have content that is displayed when
     browser disables JavaScript.

Syntax:
    <noscript>
       Please enable Javascript in your browser
    </noscript>

3. JavaScript from External File:
- You can write Javascript functions in a separate script file that have extention ".js"
- You can link and reuse from any page.
- Easy reusability across pages and extensibility.
- Using an external file, will increase the number of requests and also page load time.

Syntax:
        ticket.js

        function  PrintTicket()
        {
          window.print();
        }

        <script type="text/javascript"  src="ticket.js"> </script>

        <button onclick="PrintTicket()"> Print </button>

Ex:
src/scripts/ticket.js

"use strict";
function PrintTicket(){
    window.print();
}

home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../src/scripts/ticket.js">
    </script>
</head>
<body>
    <noscript> Please enable javascript in your browser. </noscript>
    <h1>Ticket</h1>
    <p>Click Print Button to Print your ticket.</p>
    <button onclick="PrintTicket()">Print</button>
</body>
</html>


FAQ: What is minification?
Ans : It is the process of compressing the file  to reduce its size.
     It is a coding technique used to reduce the number of lines and size of file.

        https://www.toptal.com/developers/javascript-minifier


FAQ: How JavaScript refers the HTML elements?
Ans:   Javascript can use various techniques to refer HTML elements.

1. Refer by using DOM hierarchy

    window.document.images[]
    window.document.forms[].elements[]

    [ ]     => refers to collection starting with index "0".

- It is the fastest way of accessing elements for Javascript interpreter.
- However changing the position of element in page needs the change of index number in code.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        function bodyload(){
            window.document.images[0].src = "../public/images/women-fashion.jpg";
            window.document.forms[0].elements[0].value = "Register";
            window.document.forms[1].elements[1].value = "Login";
        }
    </script>
</head>
<body onload="bodyload()">
   <div>
    <img width="100" height="100" border="1">
   </div>
   <div>
      <form>
         <h2>Register</h2>
         User Name : <input type="button"> <input type="text">
      </form>
   </div>
   <div>
    <form>
        <h2>Login</h2>
        Mobile : <input type="text"> <input type="button">
    </form>
   </div>
</body>
</html>



Date: 14 feb 2024 -day3
========================================================= 

1. Refer by using DOM hierarchy

2. Refer by using Name
- Every element can have a reference name.
- It is defined by using "name" attribute.
- JavaScript can access element by reffering the name.

    <img  name="pic">
   
    pic.src = "somePath";

- You can't access a child element directly.
- You have to refer the complete parent and child hierarchy.

    parentName.childName.property = value;

- Same name can be defined for multiple elements, hence Javascript can't refer elements with same name in page.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        function bodyload(){
            pic.src = "../public/images/women-fashion.jpg";
            frmRegister.btnRegister.value = "Register";
            frmLogin.btnLogin.value = "Login";
        }
    </script>
</head>
<body onload="bodyload()">
   <div>
    <img width="100" name="pic" height="100" border="1">
   </div>
   <div>
      <form name="frmRegister">
         <h2>Register</h2>
         User Name :  <input name="txtName" type="text"> <input name="btnRegister" type="button">
      </form>
   </div>
   <div>
    <form name="frmLogin">
        <h2>Login</h2>
        Mobile : <input name="txtMobile" type="text"> <input name="btnLogin" type="button">
    </form>
   </div>
</body>
</html>

3. Refer By ID
- Every element in page can have a reference ID.
- JavaScript can access element with ID reference by using the method

        document.getElementById()

- It can access any element from any level of hierarchy.

         <img  id="pic">

          document.getElementById("pic")

- Styles also use "id" as reference, where it can be same for multiple elements. Hence it conflicts with reference in JavaScript.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        function bodyload(){
            document.getElementById("pic").src = "../public/images/men-fashion.jpg";
            document.getElementById("btnRegister").value = "Register";
            document.getElementById("btnLogin").value = "Login";
        }
    </script>
</head>
<body onload="bodyload()">
   <div>
    <img width="100" id="pic" height="100" border="1">
   </div>
   <div>
      <form name="frmRegister">
         <h2>Register</h2>
         User Name :  <input id="txtName" type="text"> <input id="btnRegister" type="button">
      </form>
   </div>
   <div>
    <form name="frmLogin">
        <h2>Login</h2>
        Mobile : <input id="txtMobile" type="text"> <input id="btnLogin" type="button">
    </form>
   </div>
</body>
</html>

4. Refer by using CSS selectors
- Javascript provides the method
   
        document.querySelector()

- It can use all CSS selectors for reference

        type, id, class, rational, pseudo classes, attribute selectors etc..

Syntax:
        document.querySelector("img")            => type
        document.querySelector("#pic")            => id
        document.querySelector(".btn-primary")    => class
        document.querySelector("nav span")        => child
        document.querySelector("nav+div")        => adjacent
        etc..

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        function bodyload(){
           document.querySelector("img").src = "../public/images/kids-fashion.jpg";
           document.querySelector("#btnRegister").value = "Register";
           document.querySelector(".btn-login").value = "Login";
        }
    </script>
</head>
<body onload="bodyload()">
   <div>
    <img width="100"  height="100" border="1">
   </div>
   <div>
      <form name="frmRegister">
         <h2>Register</h2>
         User Name :  <input id="txtName" type="text"> <input id="btnRegister" type="button">
      </form>
   </div>
   <div>
    <form name="frmLogin">
        <h2>Login</h2>
        Mobile : <input id="txtMobile" type="text"> <input class="btn-login" type="button">
    </form>
   </div>
</body>
</html>

Summary
- Refer by DOM hierarchy
- Refer by Name
- Refer by ID
- Refer by CSS Selectors

                      JavaScript Output Techniques

- Output is the process of rendering result into User Interface. [UI]
- So that users or developers can view the result.
- JavaScript provides various output methods

    1. alert()
    2. confirm()
    3. document.write()
    4. console methods
    5. innerHTML
    6. outerHTML
    7. innerText
    8. textContent()


                            alert()
- It is a message box that pops up message in browser window.
- It will not allow to perform any another task until confirmed by user.
- It doesn't provide any option for cancel.

Syntax:
        alert(value/expression);
        alert("hello");
        alert(20);
        alert(30+2);
        alert("Age=" + (20+3));

- You can add line breaks in message by using "\n".
- You can't use any markup.

Syntax:
        alert("line-1 \n line-2");
        alert("line-1 <br> line-2");        <br> is displayed as text.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function PayClick(){
            alert("Payment Success\nInvoice sent to your Email\nBill Amount=" + (3000*2));
        }
    </script>
</head>
<body>
    <button onclick="PayClick()">Pay</button>
</body>
</html>

                            confirm()
- It is similar to an alert but provides an action button to cancel the message box.

Syntax:
      confirm(value/expression)

- "confirm()" method returns a boolean "true" on OK   and "false" on Cancel.
- You have to use a decision making statement to define actions on OK or Cancel.

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function PayClick(){
           flag = confirm("Payment Initiated\nInvoice will be sent\nBill Amount=" + (3000*2) + "\n Are you sure?");
           if(flag==true){
               alert("Payment Completed..");
           } else {
              alert("Payment Canceled..");
           }
        }
    </script>
</head>
<body>
    <button onclick="PayClick()">Pay</button>
</body>
</html>
 

                        document.write()
- It is a rendering method that generates output and renders on new screen.
- It can use value, expression or markup for presentation.
- It is not on a new page, it is on the same page but new screen.

Syntax:
    document.write(value / expression / markup);

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function PayClick(){
           flag = confirm("Payment Initiated\nInvoice will be sent\nBill Amount=" + (3000*2) + "\n Are you sure?");
           if(flag==true){
               document.write("<font face='Arial' size='6' color='green'><b>Payment Completed..</b></font>");
           } else {
              document.write("Payment Canceled..<br><a href='output.html'>try again</a>");
           }
        }
    </script>
</head>
<body>
    <button onclick="PayClick()">Pay</button>
</body>
</html>

                            innerHTML & innerText

- InnerText can display output in existing element but will not support any formats for data. [font, color, style etc..]

-innerHTML is similar to innerText but supports formats.

Syntax:
        document.querySelector("p").innerText = value;
        document.querySelector("span").innerHTML = valueWithFormat;

- You can bind value or expression.


Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script>
        c = 0;
        function AddClick(){
            c++;
            document.querySelector("#count").innerHTML = "<b>" + c + "</b>";
        }
    </script>
    <style>
        #count {
            background-color: red;
            color:white;
            padding: 2px;
            border-radius: 50px;
            width: 15px;
            height: 15px;
            display: inline-block;
            text-align: center;
        }
    </style>
</head>
<body>
    <button onclick="AddClick()" class="bi bi-cart2"> Add to Cart</button>
   <div style="position: fixed; top:20px; right:100px">
     <span class="bi bi-cart4"> <span id="count"></span>  </span>
   </div>
</body>
</html>


Date: 16 feb 2024 -day4
=========================================================

Query String
Prompt
Form Elements

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inox</title>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script type="text/javascript">
        function BookClick(){

            document.getElementById("SummaryContainer").style.display = "block";
            document.getElementById("btnQuickBooking").style.display = "none";

             document.getElementById("lblMovies").innerHTML =  document.getElementById("lstMovies").value;
             document.getElementById("lblCinema").innerHTML = document.getElementById("lstCinema").value;
             document.getElementById("lblDate").innerHTML = document.getElementById("lstDate").value;
             document.getElementById("lblTime").innerHTML = document.getElementById("lstTime").value;
             document.getElementById("lblSeats").innerHTML= document.getElementById("lstSeats").value;

             movieName = document.getElementById("lstMovies").value;
             if(movieName=="Eagle"){
                document.getElementById("imgPoster").src = "../public/images/eagle.jpg";
             } else {
                document.getElementById("imgPoster").src = "../public/images/hanuman.jpg";
             }
        }
        function ModifyClick(){
            document.getElementById("btnBook").innerHTML = "Update";
        }
    </script>
</head>
<body class="container-fluid">
    <button id="btnQuickBooking" class="btn btn-danger mt-2" data-bs-target="#booking" data-bs-toggle="modal">Quick Booking</button>
    <div class="modal fade" id="booking">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Quick Booking - Cinema</h3>
                    <button class="btn btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <nav class="d-flex justify-content-between p-3">
                        <div>
                            <select id="lstMovies" class="form-select">
                                <option>Select Movie</option>
                                <option>Eagle</option>
                                <option>HanuMan</option>
                            </select>
                        </div>
                        <div>
                            <select id="lstCinema" class="form-select">
                                <option>Select Cinema</option>
                                <option>Inox Bhills</option>
                                <option>Inox KPHB</option>
                            </select>
                        </div>
                        <div>
                            <select id="lstDate" class="form-select">
                                <option>Select Date</option>
                                <option>Today, Feb 15</option>
                                <option>Tomorrow, Feb 16</option>
                            </select>
                        </div>
                        <div>
                            <select id="lstTime" class="form-select">
                                <option>Select Time</option>
                                <option>10:30 AM</option>
                                <option>10:45 PM</option>
                            </select>
                        </div>
                        <div>
                            <select id="lstSeats" class="form-select">
                                <option>Select Seats</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div>
                            <button onclick="BookClick()" id="btnBook" data-bs-dismiss="modal" class="btn btn-danger">Book</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div class="w-50" style="display: none;" id="SummaryContainer">
        <h3>Booking Summary</h3>
        <div class="row">
            <div class="col">
                <img width="100%" height="300" id="imgPoster">
            </div>
            <div class="col">
                <dl>
         
                    <dt>Movie</dt>
                    <dd id="lblMovies"></dd>
                    <dt>Cinema</dt>
                    <dd id="lblCinema"></dd>
                    <dt>Date</dt>
                    <dd id="lblDate"></dd>
                    <dt>Time</dt>
                    <dd id="lblTime"></dd>
                    <dt>Seats</dt>
                    <dd id="lblSeats"></dd>
                  </dl>
            </div>
            <button class="btn btn-link" onclick="ModifyClick()" data-bs-target="#booking" data-bs-toggle="modal">Modify Booking</button>
        </div>
       
    </div>
    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>

Ex:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Input</title>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <script type="text/javascript">
        function RegisterClick(){
             document.getElementById("btnAdd").style.display = "none";
             document.getElementById("detailsContainer").style.display = "block";

             document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
             document.getElementById("lblPrice").innerHTML = document.getElementById("txtPrice").value;
             document.getElementById("lblCity").innerHTML = document.getElementById("lstCities").value;

             StockCheckbox = document.getElementById("optStock");
             StockStatus = "";

             if(StockCheckbox.checked) {
                StockStatus = "Available";
             } else {
                StockStatus = "Out of Stock";
             }

             document.getElementById("lblStock").innerHTML = StockStatus;

        }

        function EditClick(){
            document.getElementById("btnRegister").innerHTML = "Save";
            document.getElementById("btnRegister").className = "btn btn-success";
        }
    </script>
</head>
<body class="container-fluid">
    <button data-bs-target="#register" id="btnAdd" data-bs-toggle="modal" class="btn btn-primary mt-2" id="btnAdd">Add Product</button>
    <div class="modal fade" id="register">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Register Product</h2>
                    <button class="btn btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" class="form-control" id="txtName"></dd>
                        <dt>Price</dt>
                        <dd><input type="number" class="form-control" id="txtPrice"></dd>
                        <dt>Shipped To</dt>
                        <dd>
                            <select id="lstCities" class="form-select">
                                <option>Select City</option>
                                <option>Delhi</option>
                                <option>Hyd</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd class="form-switch">
                            <input class="form-check-input" type="checkbox" id="optStock"> <label> Available </label>
                        </dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button onclick="RegisterClick()" id="btnRegister" data-bs-dismiss="modal" class="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    </div>
    <div id="detailsContainer" style="display: none;">
        <h3>Product Details</h3>
        <dl class="row">
            <dt class="col-3">Name</dt>
            <dd class="col-9" id="lblName"></dd>
            <dt class="col-3">Price</dt>
            <dd class="col-9" id="lblPrice"></dd>
            <dt class="col-3">City</dt>
            <dd class="col-9" id="lblCity"></dd>
            <dt class="col-3">Stock</dt>
            <dd class="col-9" id="lblStock"></dd>
        </dl>
        <button class="bi bi-pen-fill btn btn-warning" data-bs-target="#register" data-bs-toggle="modal" onclick="EditClick()"> Edit </button>
    </div>
    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
</body>
</html>

Summary [ Output & Input ]
- Output
     alert()
     confirm()
     document.write()
     innerText
     innerHTML
     outerHTML
     textContent
     console methods
- Input
    Query String
    Prompt
    Form Elements

                       JavaScript Language
1. Variables
2. Data Types
3. Operators
4. Statements
5. Functions

                                JavaScript Variables

- Variables are storage locations in memory, where you can store a value and use as a part of any expression.
- It allows reusability of data present in memory.
- Variable configuration comprises of 3 phases.

        a) Declaration
        b) Assignment
        c) Initialization


        var x;        => declaring
        x = 10;        => assignment
        var y = 20;    => initialization

- Javascript can assign and use a variable directly if it is not in strict mode.
- Declaring variable is mandatory if Javascript is in strict mode.
- Variables in Javascript can be declared by using following keywords

        a) var
        b) let
        c) const

var
- It defines a function scope variable.
- A function scope variable can be declared in any block of a function and can be accessed from any another block in function.
- It supports declaring, assigning & intialization.

Ex:
<script type="text/javascript">
     function f1()
     {
          var x;            // declaring
          x = 10;           // assigning
          if(x==10)
          {
             var y = 20;    // initializaiton
          }
          document.write("x=" + x + "<br>" + "y=" + y);

     }
     f1();
</script>

- It allows shadowing. It is the process of configuring or declaring same name identifier with in the scope.

            {
               var y = 10;        // initialize
               y=20;            // assign
               var y=30;        // shadowing
            }

Ex:
<script type="text/javascript">
     function f1()
     {
          var x;            // declaring
          x = 10;           // assigning
          if(x==10)
          {
             var y = 20;    // initializaiton
             y = 30;        // assigning
             var y = 40;    // shadowing
          }
          document.write("x=" + x + "<br>" + "y=" + y);

     }
     f1();
</script>

- It allows hoisting. It is a technique that allows to use before declaring.
- Var can hoist your variables, hence there is no order dependency.

Ex:
<script type="text/javascript">
     "use strict";
     function f1()
     {
        x = 10;
        document.write("x=" + x);
        var x;   //hositing
     }
     f1();
</script>

let:
- It defines a block scope variable.
- It is accessible only witin the specified block and its inner blocks.
- This mechansim is called closure.
- It supports declaring, initalizing and assignment.
- It will not support shadowing & hosting.



Date: 16 feb 2024 -day4
=========================================================