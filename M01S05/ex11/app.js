function calculateSurface(l, L, h) {
  switch (arguments.length) {
    case 1:
      return l ** 2;
      break;

    case 2:
      return L * l;
      break;

    case 3:
      return 2 * (L * l + L * h + l * h);
      break;
  }
}

calculateSurface(6, 7);
calculateSurface(20, 15, 5);

function calculateCircleArea(r) {
  return Math.PI * r ** 2;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

const pet = {
  getName: () => {
    return 'KitKat';
  },
  getSpecies: () => {
    return 'cat';
  },
  getAge: () => {
    return 5;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

var petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
