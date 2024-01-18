/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let num = parseInt(s);
  if (isNaN(num)) return 0;
  if (num < -(2 ** 31)) return -(2 ** 31);
  if (num > 2 ** 31 - 1) return 2 ** 31 - 1;

  return num;
};

console.log(myAtoi("words and 987"));
