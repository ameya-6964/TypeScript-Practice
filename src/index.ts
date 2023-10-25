//Explicit Annotate
let username: string = "Ameya";

//Impplicit
let password = "12121@ab";

let address: string;

address = "Airoli";

let userDetailDescription: string = `User Details Are ${username} + ${password}`;
console.log(userDetailDescription);

//Null Value : Intentionally Specifying Absence : Type Any
//Both Are Falsy Value
let userName = null;
console.log(typeof userName, userName);

//Undefined : By Default When VAlue is Not Initilised : Type: Any
let userPassword;
console.log(typeof userPassword, userPassword);

//Any Type : Avoid Using Any DataType
let networkData: any = 123;
networkData = "any Data";
console.log(typeof networkData);
networkData = true;
networkData = false;
console.log(typeof networkData);
networkData = {
  productName: "Samsung TV",
  price: 1233,
  isSale: false,
};

console.log(typeof networkData, networkData);
