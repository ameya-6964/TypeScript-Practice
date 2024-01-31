//Global Scope Of Variable x
let x: number = 15;

function a(): void {
  console.log(x); //15
}

function b(): void {
  //Local Scope Of Variable x is Functioned Scope
  let x: number = 10;
  console.log(x); //10
}
a();
b();

export {};
