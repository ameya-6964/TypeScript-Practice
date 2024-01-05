"use strict";
class Sum {
    constructor(a, b) {
        if (a < 0 || b < 0) {
            throw new Error("Negative Values Not Allowed");
        }
        this._a = a;
        this._b = b;
        console.log("Creating Object");
    }
    set setA(a) {
        this._a = a;
    }
    set setB(b) {
        this._b = b;
    }
    getSum() {
        return this._a + this._b;
    }
}
let sum1 = new Sum(1, 2);
sum1.setA = 43;
sum1.setB = 43;
console.log(sum1.getSum());
