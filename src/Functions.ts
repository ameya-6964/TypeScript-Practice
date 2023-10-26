/* function calculateTax(income: number, taxYear: number = 2022): number {
  if (income > 50_000 && taxYear < 2022) {
    return income * 1.2;
  }
  return income * 0.5;
}

calculateTax(10_2000);


 */

/* 
 Syntax :- function nameOfFunction(parameter1:type) :returnType{
  functionBody
 }
*/
function greet(name: string): string {
  return `Hello ${name}, Nice To See You`;
}
let greet1 = greet("Ameya");
console.log(greet1);

function isEligble(name: string, age: number): string {
  let eligibleAge = 18;
  if (age >= 18) {
    return `You Are Eligible ${name} Your Age Is ${age} Years 😀`;
  }
  return `You Are Not Eligible ${name} Please Apply After ${
    eligibleAge - age
  } Years 😇`;
}

let driver1 = isEligble("Ameya", 18);
console.log(driver1);
let driver2 = isEligble("Jayesh", 16);
console.log(driver2);

//!Function Types
/* let x: (a: number, b: number) => number */
let x = function myFunType(a: number, b: number): number {
  return a + b;
};

let person: {
  firstName: string;
  lastName: string;
  DOB: number;
  getFullName: () => string;
  getAge: (a: number) => number;
};

person = {
  firstName: "Ameya",
  lastName: "Belvalkar",
  DOB: 1997,
  getFullName: function () {
    return `My Name Is ${this.firstName} ${this.lastName}`;
  },
  getAge: function (DOB) {
    let currentYear = 2023;
    return currentYear - DOB;
  },
};

console.log(person.getFullName());
console.log(person.getAge(1997));
