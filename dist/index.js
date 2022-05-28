"use strict";
//Basic types
let id = 5;
let company = "Atuhaire Collins";
let isHot = true;
let x = "Hello"; //can be anything
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//tuple
let person = [1, "gsgsgs", true];
//tuple array
let employee = [
    [1, "sss", true],
    [1, "gsgsgs", true],
    [1, "gsgsgs", true],
];
//union
let pid;
pid = "22";
pid = 22;
//enum
var Dirctions;
(function (Dirctions) {
    Dirctions[Dirctions["Up"] = 0] = "Up";
    Dirctions[Dirctions["Down"] = 1] = "Down";
    Dirctions[Dirctions["Left"] = 2] = "Left";
    Dirctions[Dirctions["Right"] = 3] = "Right";
})(Dirctions || (Dirctions = {}));
console.log(Dirctions.Up);
var Dirctions1;
(function (Dirctions1) {
    Dirctions1[Dirctions1["Up"] = 1] = "Up";
    Dirctions1[Dirctions1["Down"] = 2] = "Down";
    Dirctions1[Dirctions1["Left"] = 3] = "Left";
    Dirctions1[Dirctions1["Right"] = 4] = "Right";
})(Dirctions1 || (Dirctions1 = {}));
console.log(Dirctions1.Up);
var Dirctions2;
(function (Dirctions2) {
    Dirctions2["Up"] = "Up";
    Dirctions2["Down"] = "Down";
    Dirctions2["Left"] = "Left";
    Dirctions2["Right"] = "Right";
})(Dirctions2 || (Dirctions2 = {}));
console.log(Dirctions2.Up);
//objects
const user = {
    id: 1,
    name: "john",
};
const product = {
    id: 1,
    name: "john",
};
//type assertion
let cid = 1;
let customerId = cid;
let customerId1 = cid;
//functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
    age: 36,
};
const add = (x, y) => x + y;
class Personn {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is registered`;
    }
}
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const brad = new Person(2, "bradd", 43);
class Employee extends Personn {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
