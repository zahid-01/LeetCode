const numbers = [2, 4, 1, 6, 8, 3, 5, 0, 9, 7];

const selectionSort = (numbers) => {
  for (i = 0; i < numbers.length; i++) {
    let index = i;
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[index]) index = j;
    }

    let temp = numbers[i];
    numbers[i] = numbers[index];
    numbers[index] = temp;
  }
};

selectionSort(numbers);
console.log(numbers);
