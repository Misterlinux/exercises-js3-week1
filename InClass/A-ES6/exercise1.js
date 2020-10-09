// Turn this function into an arrow function
function arrow1() {
  return "es6 is awesome!";
}

const arrow = () => 'es6 is awesome!';

console.log(arrow())

//Use the es6 syntax for default parameter
function defaultParameter1(name) {
  var name = name || "sam";
  return name;
}
const defaultParameter = (name = 'sam ') =>  name;

console.log(defaultParameter("indeed"))

// Use the spread operator to combine arr1 and arr2
function combineArrays1(arr1, arr2) {
  return arr1.concat(arr2);
}
const combineArrays = (arr1, arr2) => [...arr2,...arr1];

console.log(combineArrays1("ok so", "maybe"))
//use destructuring to return the object's cyf property
function destructuring1(obj) {
  return obj.cyf;
}

const destructuring = (obj) => {
  const {cyf} = obj;
  return cyf;
}

// use template literal to return a string with the sum of a and b
function templateString1(a, b) {
  return "The sum is equal to " + (a + b).toString();
}
const templateString = (a, b) => `The sum is equal to ${(a + b).toString()}`;

console.log(templateString("okie", "dokie"))