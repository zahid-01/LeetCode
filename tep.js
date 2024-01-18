/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1
  }
  let result = []
  let arr2 = [...Object.values(obj)]
  for (let j = 0; j < arr2.length; j++) {
      const element = arr2[j]
      if (result.includes(element)) {
          return false
      }
      else {
          result.push(element)
      }
  }
  return true
};
let t1 = performance.now();
console.log(uniqueOccurrences([1,2,2,,1,1,3]));
let t2 = performance.now();

console.log("time taken " , t2 -t1);