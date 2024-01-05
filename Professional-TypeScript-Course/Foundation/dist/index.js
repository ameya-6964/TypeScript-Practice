"use strict";
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("btn");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", () => {
    console.log(add(Number(num1.value), Number(num2.value)));
});
