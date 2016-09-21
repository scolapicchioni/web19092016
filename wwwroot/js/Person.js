"use strict";
var Person = (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = "";
        this.age = 0;
    }
    Person.prototype.sayHi = function () {
        console.log("hi!");
    };
    Person.prototype.buyStuff = function () {
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (v) {
            this._age = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (v) {
            this._surname = v;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
