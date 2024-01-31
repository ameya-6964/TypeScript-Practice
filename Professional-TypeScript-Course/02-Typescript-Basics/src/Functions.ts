function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 4)); //9
// console.log(sum(5, "4")); //Error While Compiling In TypeScript

// Function Not Returning Any Value

function greet(name: string): void {
  console.log("Hello Sir,", name);
}
console.log(greet("Ameya")); // "Hello Sir, Ameya" and undefined in nextLine
