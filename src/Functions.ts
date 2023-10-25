/* function calculateTax(income: number, taxYear: number = 2022): number {
  if (income > 50_000 && taxYear < 2022) {
    return income * 1.2;
  }
  return income * 0.5;
}

calculateTax(10_2000);


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
