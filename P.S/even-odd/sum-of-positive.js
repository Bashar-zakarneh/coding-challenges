//-------------------------------------------------------------------------
//! Q2:You get an array of numbers, return the sum of all the positives ones.
//-------------------------------------------------------------------------
//?----------------Soliution [1]-----------------[for,if]

/*
1.initValue = 0
2.ArrayLoop
3.Check the number if positive or not
4.if positive add to initValue
*/

function positiveSum(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}

console.log("positiveSum");
console.log(positiveSum([1, 2, 3, 4, 5])); //==> 15
console.log(positiveSum([1, -2, 3, 4, 5])); //==> 13
console.log(positiveSum([])); //==> 0

//?----------------Soliution [2]-----------------[filter,reducer]

function positiveSum1(arr) {
  return arr
    .filter((newArr) => newArr > 0)
    .reduce((previos, current) => previos + current, 0);
}
console.log("positiveSum1");
console.log(positiveSum1([1, 2, 3, 4, 5])); //==> 15
console.log(positiveSum1([1, -2, 3, 4, 5])); //==> 13
console.log(positiveSum1([])); //==> 0

//?----------------Soliution [3]-----------------[reducer]

function positiveSum2(arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}

console.log("positiveSum2");
console.log(positiveSum2([1, -2, 3, 4, -5])); // Output: 8
console.log(positiveSum2([-1, -2, -3, -4, -5])); // Output: 0
console.log(positiveSum2([1, 2, 3, 4, 5])); //==> 15
console.log(positiveSum2([1, -2, 3, 4, 5])); //==> 13
console.log(positiveSum2([])); //==> 0
