class Car {
  constructor(brand, {numDoors, motor} = {}) {
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

const car = new Car("Ford", {numDoors: 2});
console.log(car)

/* 

Having a object with lot of parameters ...
class Car (param, param, param, param, param, param, ...)
Make it difficult to give the parameters in the right order if we want to give only few parameters
new Car (1, "Ford", undefined, undefined, true, ...)

So it is easier to set every parameter one by one chaining the methods.

JavaScript version with unstructured objects and defaults

Giving the constructor a undefined object by default allow us to choose what parameters to give
In case we don't give some of the parameters it will be undefined
{numDoors, motor} = {}
*/
