const arr = [1, 2, 3, 4];

const find = (arr, val) => {
  let counter = 0;

  while (true) {
    console.log("Missisipi");
    if (arr[counter] === val) return val;
    counter++;
  }
};

console.log(find(arr, 4));
