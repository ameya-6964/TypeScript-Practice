type xyz = string;

let addres: xyz = "mumbai";

type alphaNumeric = string | number;

let pass: alphaNumeric = 1212;
console.log(typeof pass);
pass = "ABC";
console.log(typeof pass);

type Order = {
  title: string;
  price: number;
  status: string;
  date: number;
};

let order1: Order = {
  title: "One Plus",
  price: 40000,
  status: "Pending",
  date: 121212,
};
