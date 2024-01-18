/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let nums ={};
  arr.forEach(el=>{
    nums[el] = (nums[el] || 0) + 1;
  })
  
  let occurances = {};
  
  for(let key in nums){
    let myKey = nums[key];
    if(occurances[myKey]){
      return false
    }occurances[myKey] = true
  }
  return true;
};

let t1 = performance.now();
console.log(uniqueOccurrences([1,2,2,,1,1,3]));
let t2 = performance.now();

console.log("time taken " , t2 -t1);