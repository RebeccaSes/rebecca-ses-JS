const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  popTrunk: function () {
    this.openTrunk();

    setTimeout(() => {
      this.closeTrunk();
    }, 5000);
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed || speed < this.topReverseSpeed) {
      this.speed = 20;
    }
  },
};

console.warn(
  `Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".`,
);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(`Decelereaza masina cu 5 unitati apoi afisaza
propozitia: "Viteza noua este speed km/h".
`);
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
console.log(`Viteza noua este ${car.speed} km/h.`);

console.warn(
  `Adauga o metoda numita stop() care sa faca
  proprietatea speed 0, apoi afiseaza viteza.`,
);
car.stop();
console.log(`${car.speed}`);
