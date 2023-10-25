"use strict";
function myFun(a, b) {
    console.log(`Sum Is ${a + b}`);
    return a + b;
}
function myFun1(a, b) {
    console.log(`Sum Is ${a + b}`);
}
myFun(1, 2);
myFun1(1, 2);
function myFunction3() {
    throw new Error("This is My Error");
}
function myFun4() {
    return "This Is Value";
}
let value = myFun4();
let valueInString = value;
console.log(valueInString.toUpperCase());
