// Modifica exemplul astfel incat bucla sa
// numere de la 1 la 100
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

// var i = 1;

// do {
//   if (i > 50) {
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 52
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// Folosind keywordul break opreste bucla
//atunci cand numarul este egal cu 12 (dar afiseaza-l)
// do {
//   if (i === 12) {
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 8;
// do {
//   if (i % 0 === 0) {
//     continue;
//   }

//   console.log(i);
//   i++;
// } while (i <= 32);

// Folosind metoda prompt de trei ori cere utilizatorului
//un numar, o limita inferioara si o limita superioara
//apoi afiseaza toti multiplii de numar intre limita
//inferioara si limita superioara introduse.

// var number = window.prompt();
// var downLimit = window.prompt();
// var upLimit = window.prompt();

// var i = 0;

do {
  i++;
  if (i < downLimit) {
    continue;
  }

  if (i >= number && i & (number === 0)) {
    console.log(i);
  }
  i++;
} while (i < upLimit);
