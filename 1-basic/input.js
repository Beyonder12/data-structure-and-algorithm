const { performance } = require('perf_hooks'); //Timing library

function objectSolution(nums) {
  let testObj = {};
  for (var i = 0; i < nums.length; i++) {
    let aNum = nums[i];
    if (testObj[aNum]) {
      return true;
    } else {
      testObj[aNum] = true;
    }
  }

  return false;
}

function setSolution(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}

function runTest(testFunction, testArray) {
  console.log('   Running test:', testFunction.name);
  let start = performance.now();
  let result = testFunction(testArray);
  let end = performance.now();
  console.log('      Duration:', end - start);
}

let arr = [];
let setSize = 1000;
for (var i = 0; i < setSize; i++) {
  arr.push(i);
}
console.log('Set size:', setSize);
runTest(objectSolution, arr);
runTest(setSolution, arr);