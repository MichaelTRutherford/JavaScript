// function greeting(){
//     alert("Hello World");
// }

// greeting();

// let announcement = function(){
//     alert("You are learning JavaScript functions.");
// }

// announcement();

// let cubeThis = function(someNumber){
//     document.getElementById("output").innerHTML = someNumber * someNumber * someNumber;
// }

// let x = prompt("What number would you like to cube?");
// cubeThis(x);

// let rectangleArea = function(length, width){
//     let area = length * width;
//     return area;
//     //document.getElementById("output").innerHTML = area;
// }

let rectangleArea = (length, width) => length * width;

let greeting = () => "Hello World";

console.log(greeting());

let length = prompt("Length?");
let width = prompt("Width?");

document.getElementById("output").innerHTML = rectangleArea(length, width);