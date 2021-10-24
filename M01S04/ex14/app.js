var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);

person.pets.forEach(function (pet) {
  console.log(`${pet.name}`);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor.
`);

var sumPetYears = 0;
for (i = 0; i < person.pets.length; i++) {
  sumPetYears += person.pets[i].age;
}
console.log(sumPetYears);

console.warn(`Folosind forEach() afiseaza cate una pe linie propozitiile:
“Twix este papagal si are 4 ani. Mars este caine si are… etc”.`);
person.pets.forEach(function (pet, species, age) {
  var { name, species, age } = pet;
  console.log(`${name} este ${species} si are ${age} ani.`);
});

console.warn(`Folosind o bucla for afiseaza cate
una pe linie propozitiile: “Intre Dragos si Twix este o
diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);

var personAge = 2021 - person.birthYear;
person.pets.forEach(function (pet, index, pets) {
  var ageDiff = Math.abs(personAge - pets[index].age);

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(`Folosind o bucla for afiseaza in ordine
inversa numele animalelor din array sub
forma de propozitii: “Animalul meu se numeste xxxx.”. `);

person.pets.reverse().forEach(function (pet) {
  console.log(`Animalul meu se numeste ${pet.name}`);
});

console.warn(`Folosind o bucla for afla care este
cel mai in varsta animal si afiseaza propozitia:
 “xxx este cel mai batran animal pe care il am,
 dar intre noi este o diferenta de xx ani.”
`);

var maxAge = person.pets[0].age;
var oldestPet = person.pets[0].name;
for (i = 0; i < person.pets.length; i++) {
  if (maxAge < person.pets[i].age) {
    maxAge = person.pets[i].age;
    oldestPet = person.pets[i].name;
  }
}
var ageDiff = personAge - maxAge;
console.log(
  `${oldestPet} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(`Folosind o bucla forEach afiseaza propozitia:
“Am papagal, caine, hamster si pisica.”.
`);

// eroare in Pixeltab pt cerinta asta (reverse problem)

var message = 'Am ';
Object.keys(person.pets).forEach(function (petProperty, index, petKeys) {
  var pet = person.pets[petProperty];
  var punctuation = ', ';
  var arrLength = petKeys.length;

  if (index == petKeys.length - 1) {
    punctuation = '.';
  }

  if (index === arrLength - 2) {
    punctuation = ' si ';
  }

  message = `${message}${pet.species}${punctuation}`;
});
console.log(message);
