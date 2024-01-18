/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;

  let num = 0;
  let digits = [];

  while (num !== 1) {
    while (n !== 1) {
      digits.push(Math.pow(n % 10, 2));
      n = Math.floor(n / 10);
      n = digits.reduce((acc, el) => acc + el);
      console.log(digits);
      digits = [];
    }
  }
};

isHappy(19);
