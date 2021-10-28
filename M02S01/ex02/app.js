class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    if (this.speed < this.topSpeed) {
      this.setSpeed(this.speed + 1);
    } else {
      this.speed = this.topSpeed;
    }
  }

  decelerate() {
    if (this.speed > this.topReverseSpeed) {
      this.setSpeed(this.speed - 1);
    } else {
      this.speed = this.topReverseSpeed;
    }
  }

  // refactor for out of bounds
  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  decelerate() {
    if (this.speed - 1 < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }

    this.displaySpeed();
  }
}

console.warn(`Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle,
numita Tricycle. Diferenta fiind ca o tricicleta are trei roti. `);
class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }

  decelerate() {
    if (this.speed - 1 < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }

    this.displaySpeed();
  }
}

// organism -> mammal -> primates -> human, canines, felines
// .........-> fish

const bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();

console.warn(`Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2,
 viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike. `);
const trike = new Tricycle('Tryke', 'red', 2, 9, -2);

console.warn(`Seteaza viteza instantei trike la 0`);
trike.setSpeed(0);
trike.decelerate();
trike.decelerate();
trike.decelerate();

const car = new Vehicle('Audi', 'blue', 4, 3, 140, -50);

car.setSpeed(140);
car.accelerate(); // viteza nu trece peste limita maxima
