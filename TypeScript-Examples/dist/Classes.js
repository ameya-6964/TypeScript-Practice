"use strict";
class Car {
    constructor(modelName, color = "Default Color") {
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
let car3 = new Car("Hyundai Aura");
car3.getColor();
car3.getModelNumber();
