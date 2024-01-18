/**
 * @param {string} s
 * @return {number}
 */
const romanValues = new Map();

romanValues
  .set("I", 1)
  .set("V", 5)
  .set("X", 10)
  .set("L", 50)
  .set("C", 100)
  .set("D", 500)
  .set("M", 1000);

var romanToInt = function (s) {
  let romanNum = 0;
  const x = s.split("");
  for (let i = 0; i < x.length; i++) {
    if (
      (x[i] === "I" && x[i + 1] === "V") ||
      (x[i] === "I" && x[i + 1] === "X") ||
      (x[i] === "X" && x[i + 1] === "L") ||
      (x[i] === "X" && x[i + 1] === "C") ||
      (x[i] === "C" && x[i + 1] === "D") ||
      (x[i] === "C" && x[i + 1] === "M")
    ) {
      romanNum += romanValues.get(x[i + 1]) - romanValues.get(x[i]);
      i++;
      continue;
    }
    romanNum += romanValues.get(x[i]);
  }
  console.log(romanNum);
};

romanToInt("MCMXCIV");
