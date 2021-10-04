var myArray = [1, 2, 3, 4, 5, 6];

console.warn(`Afiseaza nr de pe pozitia 5 in array`);
console.log(myArray[5].toString());

console.warn(`Afiseaza nr 3 din array`);
console.log(myArray[2].toString());

console.warn(`Afiseaza lungimea arrayului.`);
console.log(myArray.length.toString());

console.warn(`Afiseaza suma numerelor de pe pozitia 0 si 4.`);
console.log((myArray[0] + myArray[4]).toString());

console.warn(`Afiseaza pozitia 1.`);
console.log(myArray[1].toString());

console.warn(`Afiseaza numarul de pe pozitia 2 a arrayului.`);
console.log(myArray[2].toString());

//Tema

console.warn(`Afiseaza numarul 4 din array.`);
console.log(myArray[3].toString());

console.warn(
  `Afiseaza diferenta dintre lungimea arrayului si valoarea din pozitia 5.`,
);
console.log((myArray.length - myArray[5]).toString());

console.warn(`Afiseaza suma numerelor de pe pozitia 1 si 3.`);
console.log((myArray[1] + myArray[3]).toString());

console.warn(`Afiseaza produsul numerelor de pe pozitia 0 si 5.`);
console.log((myArray[0] * myArray[5]).toString());

console.warn(`Afiseaza diferenta numerelor de pe pozitia 3 si 4.`);
console.log((myArray[3] - myArray[4]).toString());

console.warn(`Folosind metoda Math.pow() afla rezultatul ridicarii la putere a
numarului de pe pozitia 5 la numarul de pe pozitia 3`);
console.log(Math.pow(myArray[5], myArray[3]).toString());
