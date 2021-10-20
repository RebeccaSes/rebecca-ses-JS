// iiife
12;

(function () {
  console.log('test');
})();

(() => {
  console.log('arrow function');
})();

(function (w) {
  console.log('am rulat si am pus ceva pe window');
  w.myName = 'Tokyo';
})(window);

console.log(myName);
