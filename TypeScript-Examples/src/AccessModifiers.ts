//! Private Limited To Same Class

//! Public Can Be Access From All Locations (By Default)

//! Protected Is Used For Same Class and Sub Class (Inheritance requried)

//! ReadOnly Makes Property Immutable

class Vehicle {
  private _carColor: string;
  constructor(color: string) {
    this._carColor = color;
  }
  display() {
    console.log(this._carColor);
  }

  getColor(): string {
    return `${this._carColor}`;
  }
  setColor(color: string) {
    this._carColor = color;
    console.log("New Color Is", this._carColor);
  }
}

let object1 = new Vehicle("White");

object1.display(); // White

object1.setColor("Orange");

object1.getColor(); // Orange
