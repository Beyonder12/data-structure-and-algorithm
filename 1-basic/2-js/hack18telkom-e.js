

function placement(arr) {
  let r = arr.length - 1, ans = [];
  for (let i = r; i >=0; i--) {
    let count = 0;
    for (let j = i -1; j >=0; j--) {
      if(arr[i] < arr[j]) count++;
    }
    ans.unshift(count);
  }

  return ans;
}

console.log('ans: ', [0,0,1,3,4,0], 'myAns:', placement([4,9,5,3,2,10]));

console.log('ans: ' , [0,0,2,0,3] , 'myAns: ', placement([3,4,1,5,2]));
