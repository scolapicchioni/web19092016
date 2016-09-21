

//class
//constructor function
function Person(name, surname, age){
    // this === window
    //return undefined;

    //this === {}

    this.name = name;
    this.surname = "";
    this.age = 0;
    this.sayHi = function(){
        console.log("HI!");
    };

    //return this;
}

const p1 = new Person("Alice");
p1.name = "Something completely different";

var p2 = new Person("Bob");
var p3 = new Person("Candice");

var p4 = Person("Candice");

console.log(p1.name);

for(let i =0; i<10; i++){

}

console.log(i);

