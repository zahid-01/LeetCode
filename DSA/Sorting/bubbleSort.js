const numbers = [2, 4, 1, 6, 8, 3, 5, 0, 9, 7];

const sort = (numsArr) => {
  for (i = 0; i < numsArr.length; i++)
    for (j = 0; j < numsArr.length; j++) {
      let temp;
      if (numsArr[j] > numsArr[j + 1]) {
        temp = numsArr[j];
        numsArr[j] = numsArr[j + 1];
        numsArr[j + 1] = temp;
      }
    }
};

console.log(numbers);
sort(numbers);
console.log(numbers);
