/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    
    for(let i = 0; i < nums.length; i++){
      map[nums[i]] = i;
    }

    console.log(map)
    for(let i = 0; i< nums.length;i++){
      const search = target - nums[i];

      if(map[search] && map[search] != i){
        return [i,map[search]]
      }
    }
};


console.log(twoSum([1,3,4,2], 6));