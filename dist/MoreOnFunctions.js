"use strict";
function myFuncionOptional(name, surname, email) {
    if (email !== undefined) {
        return `Hello Your Details Are Name: ${name} and Lastname: ${surname} and Email: ${email}`;
    }
    return `Hello Your Details Are Name: ${name} and Lastname: ${surname}`;
}
let myVariable1 = myFuncionOptional("Ameya", "Belvakar");
let myVariable2 = myFuncionOptional("Ameya", "Belvakar", "belvalkar7@gmail.com");
console.log(myVariable1);
console.log(myVariable2);
function myFunctionDefault(firstName, lastName, emailAddress = "xyz@gmail.com") {
    return `Hello Your Details Are Name: ${firstName} and Lastname: ${lastName} and Email: ${emailAddress}`;
}
let myVariable3 = myFunctionDefault("Ameyazz", "Belvalkarzz");
let myVariable4 = myFunctionDefault("Ameyazz", "Belvalkarzz", "belvalkarzz@gmail.comz");
console.log(myVariable3);
console.log(myVariable4);
function sumOfNumbers(a, b, ...rest) {
    let sum = a + b;
    rest.forEach((num) => {
        sum = sum + num;
    });
    return sum;
}
let myVariable5 = sumOfNumbers(12, 12);
let myVariable6 = sumOfNumbers(12, 12, 12, 12, 12);
console.log(myVariable5);
console.log(myVariable6);
