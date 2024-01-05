/* An enum in TypeScript allows you to define a set of named constants Values */

//Name Of Days

/* Syntax 
 enum variable {}

*/

enum DAYS {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}

enum MONTHS {
  JAN,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JUL,
  AUG,
  SEPT,
  OCT,
  NOV,
  DEC,
}

console.log(MONTHS.JAN); //0
console.log(MONTHS.FEB); //1

function myMonth(value: MONTHS) {
  switch (value) {
    case MONTHS.JAN:
      console.log("This Is First Month");
      break;
    case MONTHS.FEB:
      console.log("This Is Second Month");
      break;
    case MONTHS.MAR:
      console.log("This Is Third Month");
      break;
    case MONTHS.APR:
      console.log("This Is Fourth Month");
      break;
    case MONTHS.MAY:
      console.log("This Is Fifth Month");
      break;
    case MONTHS.JUN:
      console.log("This Is Sixth Month");
      break;
    case MONTHS.JUL:
      console.log("This Is Seventh Month");
      break;
    case MONTHS.AUG:
      console.log("This Is Eight Month");
      break;
    case MONTHS.SEPT:
      console.log("This Is Ninth Month");
      break;
    case MONTHS.OCT:
      console.log("This Is Tenth Month");
      break;
    case MONTHS.NOV:
      console.log("This Is Eleventh Month");
      break;
    case MONTHS.DEC:
      console.log("This Is Twelveth Month");
      break;
    default:
      console.log("Invalid Month");
  }
}

myMonth(MONTHS.JAN);

enum orderStatus {
  PENDING,
  DISPATCH,
  DELIVERED,
}

let order: {
  title: string;
  price: number;
  status: orderStatus;
  month: MONTHS;
  day: DAYS;
};

order = {
  title: "Apple Iphone 15",
  price: 150000,
  status: orderStatus.PENDING,
  month: MONTHS.FEB,
  day: DAYS.SUN,
};
order.status = orderStatus.DELIVERED;
console.log(order);
