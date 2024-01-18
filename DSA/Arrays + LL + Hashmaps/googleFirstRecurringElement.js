//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const findRecurring = (input) => {
  let inputMap = {};
  let recrring = undefined;

  for (let i = 0; i < input.length; i++) {
    if (inputMap[input[i]]) {
      recrring = input[i];
      break;
    }
    inputMap[input[i]] = true;
  }

  return recrring;
};

const printRecurring = (arr) => {
  console.log(findRecurring(arr));
};

printRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4, 6]);
printRecurring([2, 1, 1, , 3, 5, 1, 2, 4]);
printRecurring([2, 3, 4, 5]);
printRecurring([2, 5, 5, 2, 3, 5, 1, 2, 4]);
