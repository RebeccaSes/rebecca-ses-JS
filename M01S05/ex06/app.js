const person = {
  getName: () => {
    return 'Numele Tau';
  },
  getAge: () => {
    return 42;
  },
  get email() {
    return 'dragos@pixellab.ro';
  },
  get random() {
    return Math.floor(Math.random() * 100 + 1);
  },
};

const accessor = (methodSuffix) => {
  const methodName = `get${methodSuffix}`;

  if (person[methodName] === undefined) {
    throw new Error('Method not  found');

    // console.warn('Method not found');
    // return;
  }

  return person[methodName]();
};

console.warn(`Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);
const fullName = accessor('Name');
const [firstName, lastName] = fullName.split(' '); //destructurare
const birthYear = new Date().getFullYear() - accessor('Age');
console.log(`Eu sunt ${firstName} ${lastName}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.
`);
console.log((new Date().getFullYear() - person.getAge()).toString());

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
`);
console.log(
  `Ma numesc ${fullName}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
console.log(person.email);

console.warn(`Folosind accesorul afiseaza numele persoanei.
`);
console.log(`${fullName}`); // variable fullName declared at line 31;

console.warn(`Afiseaza varsta persoanei.
`);
const personAge = accessor('Age');
console.log(`${personAge}`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.
Intr-o propozitie de forma “M-am nascut in 1987.”`);
console.log(`M-am nascut in ${birthYear}.`); // variable birthYear declared at line 33

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${fullName} si am ${personAge} ani!`);
