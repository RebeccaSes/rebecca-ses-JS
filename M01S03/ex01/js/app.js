console.warn(
  `
    Afiseaza fraza “Ma numesc xxx yyy si am xx ani.”
    in consola folosind operatorul de concatenare
  `,
);
console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' ' +
    'si am ' +
    person.age +
    ' ani.',
);

console.warn(
  'Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent (un proces numit hardcodare)',
);

console.log((2021 - person.age).toString());

console.warn(
  'Afiseaza fraza “xxx yyy are xx ani.” in consola folosind operatorul de concatenare',
);

console.log(
  person.name +
    ' ' +
    person.surname +
    ' are ' +
    person.age.toString() +
    ' ani.',
);

console.warn('Afiseaza fraza xxx s-a nascut in aaaa');

console.log(
  person.name +
    ' ' +
    person.surname +
    ' s-a nascut in ' +
    (2021 - person.age).toString() +
    '.',
);

console.log(person.name);
console.log(person.age);
