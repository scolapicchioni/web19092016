var i;

alert("hi from the js file!");

//VALUE TYPES

//declaration
var v1;

//assignment
//v1 is of type number
v1 = 5;
v1 = 5.3;

//hexadecimal
v1 = 0xFF;

//octal!!!
v1 = 010;
v1 = Infinity;
v1 = NaN;

//v1 is of type boolean
v1 = true;
v1 = false;
v1 = 3 > 5; //false
v1 = ("3" === 3); //false
v1 = ("3" == 3); //true

//v1 is of type string
v1 = "hi";
v1 = 'hi';
//es2015
v1 = `hi`;

//null
var v2;
v2 = null;

//undefined
var v3;

f1();

f1(5,true,"hi");

function f1(p1, p2, p3){

}

var arg1 = 5;
f2(arg1);


function f2(p1){
    p1 = p1 + 1;
    //return true; 
}

//REFERENCE TYPES

//objects
//object literal
//JavaScript Object Notation (JSON)
var product1 = {};

var product1 = {
    id : 5,
    name : "Latitude E5570",
    brand : "Dell",
    price : 12345
};

var product2 = {
    name : "Latitude E5570",
    "price" : 12345,
    "category name" : "Laptops"
};

var car = {
    name : "F1",
    brand : "Ferrari"
};

product2.price = true;
product2["price"] = true;
//product2."category name" = true;
product2["category name"] = true;

f3(car);

var v4 = {};
var typeOfv4 = typeof v4; // "object"
v4.prop1 = "";

product2.Price = true;
product2["Price"] = true;

delete product2.name;


function f3(product){
    if(typeof product === "string")
    var x = product.price;
    if(product.price!== undefined)    
    for(var propertyName in product){

    }
}
f3();
f3(true);
f3("Oh hi!");
f3(product2);


//Arrays

var a1 = []; //Array
//a1.length === 0
a1[10] = true;
//a1.length === 11

a1.length = 5;
a1.length = 11;

//functions

function createProduct(id_parameter, name_parameter , brand_parameter, price_parameter){
    var newProduct = {
        id : id_parameter,
        name : name_parameter,
        brand : brand_parameter,
        price : price_parameter
    };

    return newProduct;
}

var p = createProduct(1,"Marker", "Staedtler", 2);

//var p = createProduct(1,"Marker", "Staedtler", 2,"blabla", true);

function sum(){
    //arguments
}

sum(4,1,3,7,9,3,66,957,2);

function f6(){
    var x;
    var i; 
    for(i = 0; i < 10; i++){


    }
}

for(i = 0; i < 10; i++){


}

console.log(i);



var a = 5;

function f7(){
    var b = 5;
    console.log(a);
    var a = 10;
    console.log(a);
}

f7();


