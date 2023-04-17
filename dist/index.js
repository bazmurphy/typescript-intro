"use strict";
// let id = 5;
// let id: number = 5;
// id = "5";
// Type 'string' is not assignable to type 'number'.
// console.log("ID", id);
// Basic Types
// number
let id = 5;
// string
let company = "Baz";
// boolean
let isPublished = true;
// we said that this could be anything
let x = "Hello";
x = true;
// you can initialise them also
let age;
age = 30;
// the type of elements we want in the array followed by []
// this has to be an array that only contains numbers:
let ids = [1, 2, 3, 4, 5];
// ids.push("Hello");
// Argument of type 'string' is not assignable to parameter of type 'number'.
// if you don't know what type will be in the array you can use any
let arr = [1, true, "Hello"];
// Tuple
// you can specify the exact types within the array in a PARTICULAR order
let personA = [1, "Hello", true];
// Type 'number' is not assignable to type 'boolean'. Because of the 2
// let personB: [number, string, boolean] = [1, "Hello", 2];
// Type 'boolean' is not assignable to type 'string'. true >> should be a string
// Type 'string' is not assignable to type 'boolean'. "Hello" >> should be a boolean
// let personC: [number, string, boolean] = [1, true, "Hello"];
// An Array of Tuples
// we want it to ALSO be an Array so we add the []
let employee;
employee = [
    [1, "Baz"],
    [1, "Bob"],
    [1, "Bella"],
];
// Type 'boolean' is not assignable to type 'number'.
// employee = [
//   [1, "Baz"],
//   [1, "Bob"],
//   [true, "Bella"],
// ]
// Union
// If you want a variable to be able to hold more than one Type
// you can do that with a Union
let productId;
productId = 22;
productId = "22";
// Enums (Enumerated Types)
// allow us to define a set of constants either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// by default they will have values of 0 1 2 3
console.log(Direction1.Up); // 0
console.log(Direction1.Left); // 2
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// it should now start from 1 and go 2 3 4
console.log(Direction2.Up); // 1
console.log(Direction2.Left); // 3
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up); // Up
console.log(Direction3.Left); // Left
const user = {
    id: 1,
    name: "Baz"
};
// The expected type comes from property 'id' which is declared here on type 'User'
// const user: User = {
//   id: "Hello",
//   name: "Baz"
// }
// Type Assertion
// explicitly telling the compiler that we want to treat an entity as a different type
let cid = 1;
// there are two Syntax ways to do this:
// let customerId = <number>cid;
let customerId = cid;
// Type 'boolean' is not assignable to type 'number'.
// customerId = true;
// Functions
// we must give our function parameters a type 
// we could in theory also disable `noImplicitAny: false` in the tsconfig.json
// because it "implies" the type to any
// the first and second : number relate to the arguments 
// but the last : number relates to what the function WILL RETURN
function addNum(x, y) {
    return x + y;
}
// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(addNum("1", 2));
console.log(addNum(1, 2));
// when the function doesn't return anything we use the : void type
function log(message) {
    console.log(message);
}
log(1);
log("hello");
const user2 = {
    id: 1,
    name: "Baz"
};
const point = 1;
const user4 = {
    id: 1,
    name: "Baz"
};
const user5 = {
    id: 1,
    name: "Baz"
};
// const add: MathFunc = (x: number, y: string): number => x + y;
// Type '(x: number, y: string) => number' is not assignable to type 'MathFunc'.
//   Types of parameters 'y' and 'y' are incompatible.
//     Type 'number' is not assignable to type 'string'.
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
// classes are used to create objects
// a constructor is a method, which are just functions that are within the class
// the constructor will run whenever an object INSTANTIATED from that class
// the this keyword means the current instance that we are in
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const baz = new Person(1, "Baz");
// Access / Data - Modifiers
// id: and name: are PUBLIC by default
// we can access them, and change them, etc.
baz.id = 5;
// we can make them PUBLIC / PRIVATE / PROTECTED
// PRIVATE means you should only access this property from within the Class
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(`we can access id within the class but not outside:`, this.id);
    }
}
const baz2 = new Person2(1, "Baz");
// Property 'id' is private and only accessible within class 'Person2'.
// console.log(baz2.id);
// PROTECTED means you can only access it within the Class or ANY Class that is EXTENDED from that Class
class Person3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const baz3 = new Person3(1, "Baz");
// Property 'id' is protected and only accessible within class 'Person3' and its subclasses. 
// console.log(baz3.id);
console.log(baz3.register());
// "Baz is now registered"
class Sibling extends Person3 {
    constructor(id, name) {
        super(id, name);
        console.log(`we can access id within the child class but not outside:`, id);
    }
}
const baz3a = new Sibling(1, "Baz");
//  Property 'id' is protected and only accessible within class 'Person3' and its subclasses.
// console.log(baz3a.id);
console.log(baz3a.register());
// we use the "implements" keyword on the Class and give it the Interface
class Person4 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// In this way we can map out what our Classes, Objects, Functions etc are supposed to look like.
// We make a SubClass
class Employee extends Person4 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// we instantiate a new Employee
const employee1 = new Employee(3, "Bob", "Developer");
console.log(employee1.name);
console.log(employee1.register());
// Generics - used to build Reusable Components
function getArray(items) {
    return new Array().concat(items);
}
// we have two arrays built from the getArray function
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["a", "b", "c", "d"]);
// we can do this and we won't get any errors because it takes in "ANY" and it returns "ANY"
numArray.push("a random string");
// we can add a GENERIC to this 
// so we can make an Array of Numbers that HAS to have NUMBERS
// and an Array of Strings that HAS to have STRINGS
// T is our Generic its a kind of placeholder for the type
// we add a <T> after the function name
// we add a T[] as the type of the items 
// we add a T[] as the return of the function
function getArray2(items) {
    return new Array().concat(items);
}
// and we add a type <number> or <string> after the function name
let numArray2 = getArray2([1, 2, 3, 4]);
let strArray2 = getArray2(["a", "b", "c", "d"]);
// Argument of type 'string' is not assignable to parameter of type 'number'.
// numArray2.push("hello");
numArray2.push(5);
// Argument of type 'number' is not assignable to parameter of type 'string'.
// strArray2.push(1);
strArray2.push("e");
