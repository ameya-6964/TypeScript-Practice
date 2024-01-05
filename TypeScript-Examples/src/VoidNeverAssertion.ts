/* Void : represent Constant Value That may Be Undefined and Null */
//! This Function Is Logging As Well As Returning a Value That is Why Return Type Is Number
function myFun(a: number, b: number): number {
  console.log(`Sum Is ${a + b}`);
  return a + b;
}

//! This Function Is Logging But Not Returning a Value That is Why Return Type Is Void
function myFun1(a: number, b: number): void {
  console.log(`Sum Is ${a + b}`);
}

myFun(1, 2);
myFun1(1, 2);

//! Never :- Represent Value That Will Never Occur, Used When Function Never Return Value
function myFunction3(): never {
  throw new Error("This is My Error");
}

//! Unknown :- Value Not Known , type Safe Counterpart Of Any
function myFun4(): unknown {
  return "This Is Value";
}

let value: unknown = myFun4();

let valueInString: string = value as string;

console.log(valueInString.toUpperCase());
