//! TypeScript Offer Full Support Of Class And Objects
//! Class Is TEmpelate For Object :- Blueprint
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
  getModelNumber(): string {
    console.log("Model Number is", this.model);
    return this.model;
  }
  getColor(): string {
    console.log("Color is", this.color);
    return this.color;
  }
}

//Creating Object

let car1: Car = new Car("Tata Tiago", "Black");
car1.getColor();
car1.getModelNumber();

let car2: Car = new Car("Maruti Dzire", "Red");
car2.getColor();
car2.getModelNumber();

let car3: Car = new Car("Hyundai Aura");
car3.getColor();
car3.getModelNumber();
