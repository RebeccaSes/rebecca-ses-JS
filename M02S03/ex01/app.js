class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate(i) {
    this.speed += i;

    return this;
  }

  decelerate(i) {
    this.speed -= i;

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;

    return this;
  }
}

const audi = new Car('Audi', 'black', 4, 50);

audi.accelerate(1).accelerate(1).accelerate(1).accelerate(1);

console.warn(
  `Adu instanta masinii la viteza 55 si apoi redu la 52, folosing chaining`,
);
audi
  .accelerate(1)
  .accelerate(1)
  .accelerate(1)
  .accelerate(1)
  .accelerate(1)
  .decelerate(1)
  .decelerate(1)
  .decelerate(1);

console.warn(
  `Afiseaza in DOM (prin orice metoda) viteza instantei dupa lantul de metode`,
);
const speedDisplay = document.createElement('p');
speedDisplay.textContent = `Instanta ${audi.make} are viteza ${audi.speed}.`;

document.body.append(speedDisplay);

console.warn(`Modifica metodele accelerate si decelerate
astfel incat sa primeasca un coeficient cu
 care sa mareasca sau sa reduca viteza si
 pastreaza conceptele de chaining. `);

console.warn(`Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4.
 `);
audi.accelerate(12).decelerate(3).decelerate(4);

console.warn(`Afiseaza viteza noua in DOM.
`);

speedDisplay.textContent += ` Viteza curenta este ${audi.speed}.`;

console.warn(`Creeaza o metoda chainable noua, numita setSpeed()
care sa seteze viteza la o anumita valoare (fara limite
  superioare sau inferioare pentru simplitate).
`);

console.warn(`Folosind noua metoda seteaza viteza la 4,
apoi accelereaza la 5 folosind chaining.
`);
audi.setSpeed(4).accelerate(1);

console.warn(`Afiseaza noua valoare in DOM.
`);
const speedScreen = document.createElement('p');
speedScreen.textContent = `Viteza masinii ${audi.make} este acum de ${audi.speed} km/h.`;
document.body.append(speedScreen);
