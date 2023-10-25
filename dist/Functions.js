"use strict";
function greet(name) {
    return `Hello ${name}, Nice To See You`;
}
let greet1 = greet("Ameya");
console.log(greet1);
function isEligble(name, age) {
    let eligibleAge = 18;
    if (age >= 18) {
        return `You Are Eligible ${name} Your Age Is ${age} Years 😀`;
    }
    return `You Are Not Eligible ${name} Please Apply After ${eligibleAge - age} Years 😇`;
}
let driver1 = isEligble("Ameya", 18);
console.log(driver1);
let driver2 = isEligble("Jayesh", 16);
console.log(driver2);
