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

// insert code here

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

console.warn(` Folosind metoda reverse si apoi forEach,
afiseaza in ordine inversa elementele arrayului skills.
`);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
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
