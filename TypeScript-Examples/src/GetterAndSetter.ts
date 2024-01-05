/*  When We Dont Want Our Instance Variables can Be Change Form Outside we Make Our Fields 
    Private and need setters and getters to set and get the Values
 */
class Sum {
  private _a: number;
  private _b: number;
  constructor(a: number, b: number) {
    if (a < 0 || b < 0) {
      throw new Error("Negative Values Not Allowed");
    }
    this._a = a;
    this._b = b;
    console.log("Creating Object");
  }
  //Setters
  set setA(a: number) {
    this._a = a;
  }
  set setB(b: number) {
    this._b = b;
  }

  getSum(): number {
    return this._a + this._b;
  }
}

let sum1: Sum = new Sum(1, 2);
sum1.setA = 43;
sum1.setB = 43;
console.log(sum1.getSum());
