"use strict";
let names = ["Ameya", "Jayesh", "Suraj"];
let numbers = [1, 2, 3];
console.log(`Length Of names Array is`, names.length);
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("********************");
console.log(`Length Of numbers Array is`, numbers.length);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("After Push Operation");
names.push("Voldi");
console.log(names);
console.log(names.join("-----"));
names.forEach((name, i) => {
    console.log(i, name.toUpperCase());
});
let newFriends = names.map((name) => {
    console.log(name);
    return name.toLowerCase();
});
console.log(newFriends);
let mixed = ["Ameya", "Belvalkar", 1.3232, 2.3232, 3.3232];
let mixedArray = mixed.forEach((value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
});
