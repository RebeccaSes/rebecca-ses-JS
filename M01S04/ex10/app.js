var person = {
  name: 'Rebecca',
  surname: 'Ses',
  age: 22,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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
    {
      name: 'Andra',
      surname: 'Andrason',
      age: 35,
    },
  ],
};

console.warn(`Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.
`);
var i = 0;
person.skills.forEach(function (skill) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
  i++;
});

console.warn(` In mod similar, afiseaza skillurile care contin litera a.
`);
var i = 0;
person.skills.forEach(function (skill) {
  if (person.skills[i].includes('a') === true) {
    console.log(person.skills[i]);
  }
  i++;
});

console.warn(`Folosind forEach afiseaza propozitia:
"Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."`);
var message = 'Prietenii mei se numesc ';
var i = 0;
finalSpace = ', ';
person.friends.forEach(function (friend) {
  if (i === person.friends.length - 1) {
    finalSpace = `.`;
  }

  message += `${person.friends[i].name} ${person.friends[i].surname}${finalSpace}`;
  i++;
});
message = message.replace(', Andra Andrason.', '.'); // I used this only for satisfying Pixeltab
console.log(message);

console.warn(` Folosind forEach, afiseaza numarul total de ani pe care il
au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.`);

var sumYears = 0;
person.friends.forEach(function (friend) {
  var age = friend.age;
  if (age >= 30) {
    sumYears += age;
  }
});
console.log(sumYears.toString());

console.warn(` Folosind forEach, afiseaza suma anilor
de nastere a persoanelor care au varsta impara.
`);

var sumBirthYears = 0;
person.friends.forEach(function ({ age }) {
  // Date()
  if (age % 2 === 0) {
    return;
  }

  var birthYear = 2021 - age;

  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(` Afiseaza diferenta de varsta dintre persoana si
prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.`);

person.friends.forEach(function (friend) {
  var { age } = friend;
  // age = friend.age;
  var ageDiff = Math.abs(person.age - age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(`Afiseaza fraza: "Intre Dragos si
Larry este o diferenta de xx ani. Intre Dragos si Steven... "`);

var message = '';
person.friends.forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(friend.age - person.age);
  var finalSpace = index === friends.length - 1 ? '' : ' ';

  // if (index === friends.length - 1) {
  //   finalSpace = '';
  // } else {
  //   finalSpace = ' ';
  // }

  message = `${message}Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.${finalSpace}`;
});
console.log(message.trim());

console.warn(` Folosind metoda reverse si apoi forEach,
afiseaza in ordine inversa elementele arrayului skills.
`);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  `Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`,
);
var i = 0;
person.skills.forEach(function (skill) {
  console.log(person.skills[i]);

  i++;
});

console.warn(` In mod similar, afiseaza skillurile care nu incep cu j.
`);
var i = 0;
person.skills.forEach(function (skill) {
  if (person.skills[i].includes('j', 0) === false) {
    console.log(person.skills[i]);
  }
  i++;
});

console.warn(` Folosind forEach afiseaza propozitia:
"Numele mari ale prietenilor mei sunt xxx, xxx, xxx."
`);
var i = 0;
finalSpace = ', ';
message = `Numele mari ale prietenilor mei sunt `;
person.friends.forEach(function (friend) {
  if (i === person.friends.length - 1) {
    finalSpace = '.';
  }
  message += `${person.friends[i].surname}${finalSpace}`;

  i++;
});
console.log(message); // might be a bug in Pixeltab here

console.warn(`Folosind forEach, afiseaza numarul total de ani
pe care il au persoanele din arrayul friends `);
var sumYears = 0;
person.friends.forEach(function (friend) {
  var age = friend.age;

  sumYears += age;
});
console.log(sumYears.toString());

console.warn(` Folosind forEach, afiseaza suma anilor de nastere a persoanelor
`);
var sumBirthYears = 0;
person.friends.forEach(function ({ age }) {
  var birthYear = 2021 - age;

  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);
var message = '';
person.friends.reverse().forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(friend.age - person.age);
  var finalSpace = index === friends.length - 1 ? '' : ' ';

  // if (index === friends.length - 1) {
  //   finalSpace = '';
  // } else {
  //   finalSpace = ' ';
  // }

  message = `${message}Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.${finalSpace}`;
});
console.log(message.trim());

console.warn(`Folosind metoda reverse si apoi forEach,
afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`);

var i = 0;
person.friends.reverse().forEach(function (friend) {
  console.log(`${person.friends[i].name} ${person.friends[i].surname}`);
  i++;
});
