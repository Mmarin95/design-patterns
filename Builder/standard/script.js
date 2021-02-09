class Car {
  constructor(brand, numDoors, motor) {
    this.brand = brand;
    this.numDoors = numDoors;
    this.motor = motor;
  }
}

class Motor {
  constructor(liter) {
    this.liter = liter;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  print() {
    console.log(this.car);
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setNumDoors(numDoors) {
    this.car.numDoors = numDoors;
    return this;
  }

  setMotor(motor) {
    this.car.motor = motor;
    return this;
  }

  build() {
    return this.car;
  }
}

const car = new CarBuilder();
const motor = new Motor("2.2L");

car.setBrand("Ford").setMotor(motor).build();
car.print()


/* 

Having a object with lot of parameters ...
class Car (param, param, param, param, param, param, ...)
Make it difficult to give the parameters in the right order if we want to give only few parameters
new Car (1, "Ford", undefined, undefined, true, ...)

So it is easier to set every parameter one by one chaining the methods.
*/
