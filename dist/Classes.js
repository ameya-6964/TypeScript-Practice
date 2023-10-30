"use strict";
class Car {
    constructor(modelName, color) {
        this.model = modelName;
        this.color = color;
    }
    getModelNumber() {
        console.log("Model Number is", this.model);
        return this.model;
    }
    getColor() {
        console.log("Color is", this.color);
        return this.color;
    }
}
let car1 = new Car("Tata Tiago", "Black");
car1.getColor();
car1.getModelNumber();
let car2 = new Car("Maruti Dzire", "Red");
car2.getColor();
car2.getModelNumber();
console.log(car1);
console.log(car2);
