"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(modelName, color = "Default Color") {
        this.model = modelName;
        this.color = color;
    }
    getCarDetails() {
        return `${this.color} ${this.model}`;
    }
}
let car1 = new Car("Lamborghini", "Black");
console.log(car1);
console.log(car1.model);
console.log(car1.color);
