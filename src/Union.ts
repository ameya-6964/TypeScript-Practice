/* function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
 */

// Union Type : used To Specify Two Types

//Storing UserID
let userId: string | number;
userId = 1;
userId = "dsfsdfsfsfrwerwerew432";
//Display UserID
function displayUserId(userId: string | number): string | number {
  console.log(`UserId Is ${userId}`);
  if (typeof userId === "string") {
    return userId.toUpperCase();
  }
  return userId;
}

let user1 = displayUserId(userId);
console.log(user1);

//! Union Array

let myArray: (number | string)[] = [1, "Ameya"];
let myArray1: (number | string)[] = [1, "Ameya", 2, "Belvalkar"];
