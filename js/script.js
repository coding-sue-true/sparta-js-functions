var result = 5 + 10;
var result2 = 10 + 20;
var result4 = 11 - 2;

console.log(result);
console.log(result2);
console.log(result4);

//This is a named function
function addNumbers() {
  var result = 5 + 10;
  console.log(result);
}
// I'm calling the function here
addNumbers();


//------------------This is an anonymous function
var anonAddNumbers = function() {
  var result =  5 + 10;
  console.log(result);
}
anonAddNumbers();

//---------------hello world
function hello() {
  var helloWorld = "Hello World";
  console.log(helloWorld);
}
hello();

var world = function hello() {
  var helloWorld = "Hello World";
  console.log(helloWorld);
}
world();


//------------------hoisting
makeNoise();

function makeNoise() {
  alert("how annoying");
}

//----------------return functions
function addNumbers(number1, number2) {
  return number1 + number2;
}

var answer1 = addNumbers(1,3);
// debugger;
console.log(answer1);

//----------------Evaluating
function addNumbers(1, 3) {
  return 1 + 3;
}

addNumbers(1, 3);

//------------------TASK
function addNumbers(number1, number2) {
  return number1 + number2;
}

var answer1 = addNumbers(addNumbers(5, 7), addNumbers(addNumbers(2, 10), 2));
