var addDigits = (d1, d2) => d1 + d2;

var addTwoNumbers = function (l1, l2) {
  const len = l1.length > l2.length ? l1.length : l2.length;
  // l1.reverse();
  // l2.reverse();
  let d1,
    d2,
    sum = 0,
    carry = 0,
    totalSum = [];
  for (let i = 0; i < len; i++) {
    d1 = l1[i] ? l1[i] : 0;
    d2 = l2[i] ? l2[i] : 0;
    carry = sum > 9 ? Math.floor(sum / 10) : 0;
    sum = addDigits(d1 + carry, d2);
    if (i === len - 1 && sum > 9) {
      totalSum.push(sum % 10);
      totalSum.push(Math.floor(sum / 10));
      continue;
    }
    totalSum.push(sum % 10);
  }
  return totalSum;
};

// addTwoNumbers([6, 6, 2, 3], [2, 6, 8, 5]);
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
