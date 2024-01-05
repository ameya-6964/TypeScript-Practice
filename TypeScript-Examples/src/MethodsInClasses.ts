//! Function Inside Class Is Called Methods Or Behaviour Of Objects

export {};

class Car {
  //! Code

  //! Properties - Data -- Variables
  model: string;
  color: string;
  //! Constructor -- Helps in Initialisation of Objects
  //? We Cannot Do Constructor Overloading In JavaScript
  constructor(modelName: string, color: string = "Default Color") {
    this.model = modelName;
    this.color = color;
  }
  //! Methods ==> Task ==> functionality
  getCarDetails(): string {
    return `${this.color} ${this.model}`;
  }
}

let car1: Car = new Car("Lamborghini", "Black");
console.log(car1);
console.log(car1.model);
console.log(car1.color);
