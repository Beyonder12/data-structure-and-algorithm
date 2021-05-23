var FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;

};

/**
* @param {number} index
* @param {number} val
* @return {void}
*/
FindSumPairs.prototype.add = function(index, val) {
  this.nums2.splice(index,1,val)
};

/**
* @param {number} tot
* @return {number}
*/
FindSumPairs.prototype.count = function(tot) {
  let count = 0;
  this.nums1.sort((a,b) => a - b);
  this.nums2.sort((a,b) => a - b);
  max1 = Math.max(...this.nums1)
  console.log('max1', max1)
  console.log(this.nums1)
  console.log(this.nums2)
  for(let i = 0; i < this.nums1.length; i++) {
      for (let j = this.nums2.length - 1; j >= 0; j--) {
          if(this.nums1[i] + this.nums2[j] > tot) return 0;
          if(this.nums1[i] + this.nums2[j] < tot) break;
          if(this.nums1[i] + this.nums2[j] === tot) count++;
      }
  }
  return count;

};

let fs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
console.log('fs', fs)
// fs.add(3,2);
console.log('count 7', fs.count(7))
console.log(fs)

let a = [1,2,3,4,5]
let m1 = counter(a);

console.log(m1);
