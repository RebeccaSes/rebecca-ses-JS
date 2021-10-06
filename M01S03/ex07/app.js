console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

var difference = 0;

var person = {
  firstName: 'Marilyn',
  lastName: 'Monroe',
  email: 'normaJeanM@email.com',
  birthYear: 1926,
  pets: [
    { name: 'Obi', species: 'dog', age: 6 },

    { name: 'Ubi', species: 'cat', age: 5 },

    { name: 'Ebi', species: 'snake', age: 1 },

    { name: 'Ibi', species: 'dog', age: 3 },
  ],
  zipCode: '12345',
};

var petName = person.pets[0].name;
var firstPetBirthYear = (2021 - person.pets[0].age).toString();
var secondPetBirthYear = (2021 - person.pets[1].age).toString();
var thirdPetBirthYear = (2021 - person.pets[2].age).toString();

console.warn(`Afiseaza propozitia: “Numele meu este:
xxx si yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.
`);
console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(`Afiseaza propozitia: “Unul din cele x
animale ale mele este species si are age ani.”
`);
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(`Calculeaza si afiseaza (folosind anul curent)
anul de nastere al animalului de pe pozitia 2.
`);
console.log((2021 - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani
dintre persoana si animalul de pe
pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. `);
difference = (2021 - person.birthYear - person.pets[0].age).toString();
console.log(`${difference}`);

console.warn(`Afiseaza propozitia: “Intre firstName si
petName este o diferenta de difference ani.”.`);
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

console.warn(`Folosind metoda document.getElementById()
afiseaza urmatoarele 5 afirmatii despre obiectul person.`);

document.getElementById(
  'prop01',
).innerText = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa`;

document.getElementById('prop02').innerText = (
  person.pets[0].age - person.pets[2].age
).toString();

document.getElementById(
  'prop03',
).innerText = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode} `;

document.getElementById(
  'prop04',
).innerText = `Animalele mele s-au nascut in ${firstPetBirthYear}, ${secondPetBirthYear}, respectiv ${thirdPetBirthYear}.`;
