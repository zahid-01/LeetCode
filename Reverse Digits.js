var reverse = function (x) {
  let num = x;
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    num *= -1;
  }
  let revNum = 0;
  while (num > 0) {
    revNum = revNum * 10 + (num % 10);

    num = Math.floor(num / 10);
  }
  if (revNum < -(2 ** 31) || revNum > 2 ** 31 - 1) return 0;
  return isNegative ? -revNum : revNum;
};

console.log(reverse(9876543219999999));
