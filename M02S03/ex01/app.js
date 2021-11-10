class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  decelerate() {
    this.speed--;

    return this;
  }
}

const audi = new Car('Audi', 'black', 4, 50);

audi.accelerate().accelerate().accelerate().accelerate();

console.warn(
  `Adu instanta masinii la viteza 55 si apoi redu la 52, folosing chaining`,
);
audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

console.warn(
  `Afiseaza in DOM (prin orice metoda) viteza instantei dupa lantul de metode`,
);
const speedDisplay = document.createElement('p');
speedDisplay.textContent = `Instanta ${audi.make} are viteza ${audi.speed}`;

document.body.append(speedDisplay);
