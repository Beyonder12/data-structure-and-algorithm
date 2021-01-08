function modus(nums) {
  var a = [];
  nums = nums.sort()
  for (let i = 0; i < nums.length; i++) {

    let c = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        c++;
      }
    }
    a.push(c);
  }
  return a;

}

console.log(modus([2, 2, 1, 1, 1, 2, 2]))
x = [2, 2, 3, 1]
x = x.sort()
console.log(x)