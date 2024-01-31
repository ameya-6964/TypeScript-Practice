// Core Primitive Types In JavaScript'

//* Number Datatype
let a: number = 23;
let b: number = 2.3;
let c: number = -2.3;
//Octal Number
let d: number = 0o270; //184
//Binary Number
let e: number = 0b111010; //58
//Hexadecimal Number
let h: number = 0x27ad; // 10157

//* String Datatype
let f: string = "Hello World";

//* Boolean DataType
let g: boolean = true;
let i: boolean = false;

//* undefined And Null Type

let k: null = null;
let l: number = 5;
let u: undefined;

//* any Type -> Anti-Pattern -> Never Use Any As It Defeates Purpose Of TypeScript

let random: any = 5;
console.log(random); //5
random = "Hello World";
console.log(random); // Hello World
random = true;
console.log(random); // true
