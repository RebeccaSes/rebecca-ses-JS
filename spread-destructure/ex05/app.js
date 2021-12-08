let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind destructurarea, salveaza primul si ultimul
  skill in var numite skill1 si skill3, apoi folosindu le,
  afiseaza intr-un p propozitia: Cunosc html si css`,
);

// sintactic sugar pt const skill3 = person.skills[2]
const [skill1, , skill3] = person.skills; //skill2 does not exist
console.log(`Cunosc ${skill1} si ${skill3}.`);

console.warn(
  `Similar, destruct. arrayul friends pt a obtine
  obiectul de pe pozitia 1 apoi destructureaza obiectul in var
   firend2Name, friend2Surname si friend2Age astfel incat sa le
   poti folosi in prop. "Ma numesc Steven Stevenson si am 31 de ani"`,
);

const [, { name: firend2Name, surname: friend2Surname, age: friend2Age }] =
  person.friends;

console.log(
  `Ma numesc ${firend2Name} ${friend2Surname} si am ${friend2Age} de ani.`,
);
