"use strict";
function calculateTax(income, taxYear = 2022) {
    if (income > 50000 && taxYear < 2022) {
        return income * 1.2;
    }
    return income * 0.5;
}
calculateTax(102000);
