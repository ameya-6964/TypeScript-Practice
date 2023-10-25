//Object Type Represents Multiple Properties
/* 
 {
   firstProperty1:"value".
   sexondProperty2:"value".
 }
*/

/* let student: object = {
  name: "Ameya",
  address: "Airoli",
  phoneNumber: 45446645,
  isActive: true,
}; */

let student: {
  name: string;
  address: string;
  phoneNumber: number;
  isActive: boolean;
} = {
  name: "Ameya",
  address: "Airoli",
  phoneNumber: 45446645,
  isActive: true,
};

console.log(student);
console.log(student.name);
console.log(student.address);
console.log(student.phoneNumber);
console.log(student.isActive);
