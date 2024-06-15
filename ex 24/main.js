"use strict";
// Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
//Defined Variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
//Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("Is apple is not equal to apple?");
console.log(apple != "apple");
// Test using the lower case function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");
// numerical tests
//Equality and inequality for numbers
console.log("\n Is 10 equal to twenty?");
console.log(ten == twenty);
console.log("\n Is 10 not equal to twenty?");
console.log(ten != twenty);
//Greater than and less than
console.log("\n Is 10 greater than zero?");
console.log(ten > 0);
//Greater than equal to and less than equal to
console.log("\n Is ten greater than or equal to 5?");
console.log(ten >= 5);
console.log("\n Is twenty less than 10?");
console.log(twenty < 10);
// Test using "and" & "or" operators
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
// Using || (or)
console.log("\n 20 is greater tan 50 or 20 is equal to 20?");
console.log(twenty > 50 || twenty == 20);
console.log("\n 20 is greater tan 50 or 20 is not equal to 20?");
console.log(twenty > 50 || twenty != 20);
//Test whether an item is include in array
console.log("\n Is orange in the fruits array?");
console.log(fruits.includes("orange"));
// Not include
console.log("\n Is orange in not include in the fruits array?");
console.log(!fruits.includes("orange"));
