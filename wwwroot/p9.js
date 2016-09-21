
var i = 10;

//module
var myCounter = function () {
    function increment(){
        if(i<10)
            i = i + 1;
    }
    function decrement(){
        if(i>0)
            i = i - 1;
    }

    var i;

    var returnValue = {
        inc : increment,
        dec : decrement
    };
    return returnValue;
}(); //immediately invoked function expression




//myCounter.inc();

// var person1 = {
//     name : "Alice",
//     surname : "Anderson",
//     sayHi : function (who){ 
//         console.log("HI " + who + "!");
//     } 
// };

// function x(){

// }

// person1.sayHi("Simona");

// person1.newMethod = x;


// var doSomething = function(){
//     console.log("doing stuff");
//     return 5;
// }();


// function f1(anotherFunction){
//     anotherFunction(5,4);
// }

// f1(true);

// f1({})

// f1(function(p1, p2){
//    console.log("hi"); 
// });

