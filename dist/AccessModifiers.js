"use strict";
class Vehicle {
    constructor(color) {
        this._carColor = color;
    }
    display() {
        console.log(this._carColor);
    }
    getColor() {
        return `${this._carColor}`;
    }
    setColor(color) {
        this._carColor = color;
        console.log("New Color Is", this._carColor);
    }
}
let object1 = new Vehicle("White");
object1.display();
object1.setColor("Orange");
object1.getColor();
