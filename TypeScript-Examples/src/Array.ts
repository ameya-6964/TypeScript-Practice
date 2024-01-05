//Array : Ordered List Of Data
//Syntax :- let variableName: type[] = []
let names: string[] = ["Ameya", "Jayesh", "Suraj"];
let numbers: number[] = [1, 2, 3];

/* console.log(names, names[0]);
console.log(names, names[1]);
console.log(names, names[2]);
console.log(numbers, numbers[0]);
console.log(numbers, numbers[1]);
console.log(numbers, numbers[2]); */

//Length
console.log(`Length Of names Array is`, names.length); //3
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("********************");

console.log(`Length Of numbers Array is`, numbers.length); //3
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Push Method : Inserts Element To Last Index and Returns Length Of New Array
console.log("After Push Operation");
names.push("Voldi");
console.log(names);

//Join Method

console.log(names.join("-----")); // Ameya-----Jayesh-----Suraj-----Voldi

//ForEach Loop
names.forEach((name: string, i: number) => {
  console.log(i, name.toUpperCase());
  /* 
  AMEYA
  SURAJ
  VOLDI 
  JAYESH
  */
});

//Map Function

let newFriends: string[] = names.map((name: string) => {
  console.log(name);
  return name.toLowerCase();
});

console.log(newFriends);

//Mixed values Union Type
let mixed: (string | number)[] = ["Ameya", "Belvalkar", 1.3232, 2.3232, 3.3232];

let mixedArray = mixed.forEach((value) => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
});
