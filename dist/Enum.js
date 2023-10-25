"use strict";
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 0] = "MON";
    DAYS[DAYS["TUE"] = 1] = "TUE";
    DAYS[DAYS["WED"] = 2] = "WED";
    DAYS[DAYS["THU"] = 3] = "THU";
    DAYS[DAYS["FRI"] = 4] = "FRI";
    DAYS[DAYS["SAT"] = 5] = "SAT";
    DAYS[DAYS["SUN"] = 6] = "SUN";
})(DAYS || (DAYS = {}));
var MONTHS;
(function (MONTHS) {
    MONTHS[MONTHS["JAN"] = 0] = "JAN";
    MONTHS[MONTHS["FEB"] = 1] = "FEB";
    MONTHS[MONTHS["MAR"] = 2] = "MAR";
    MONTHS[MONTHS["APR"] = 3] = "APR";
    MONTHS[MONTHS["MAY"] = 4] = "MAY";
    MONTHS[MONTHS["JUN"] = 5] = "JUN";
    MONTHS[MONTHS["JUL"] = 6] = "JUL";
    MONTHS[MONTHS["AUG"] = 7] = "AUG";
    MONTHS[MONTHS["SEPT"] = 8] = "SEPT";
    MONTHS[MONTHS["OCT"] = 9] = "OCT";
    MONTHS[MONTHS["NOV"] = 10] = "NOV";
    MONTHS[MONTHS["DEC"] = 11] = "DEC";
})(MONTHS || (MONTHS = {}));
console.log(MONTHS.JAN);
console.log(MONTHS.FEB);
function myMonth(value) {
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
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 0] = "PENDING";
    orderStatus[orderStatus["DISPATCH"] = 1] = "DISPATCH";
    orderStatus[orderStatus["DELIVERED"] = 2] = "DELIVERED";
})(orderStatus || (orderStatus = {}));
let order;
order = {
    title: "Apple Iphone 15",
    price: 150000,
    status: orderStatus.PENDING,
    month: MONTHS.FEB,
    day: DAYS.SUN,
};
order.status = orderStatus.DELIVERED;
console.log(order);
