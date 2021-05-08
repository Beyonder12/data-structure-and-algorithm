function minSwap(arr) {
  let minSwap = 0;
  arr.map((item, index) => {
    if(item !== index + 1) {
      const rightIndex = arr.indexOf(index + 1, index);
      [arr[index], arr[rightIndex]] = [arr[rightIndex], arr[index]];
      minSwap++;
    }
  })
  return minSwap;
}

console.log(minSwap([2, 3, 4, 1, 5]))


function minSwap2(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === (i+1)) continue;
      arr.map((item, i) => {
        [item,arr[item-1]] = [arr[item-1], item];
        count++;
        i--;
      })

  }
  return count ;
}

console.log(minSwap2([2, 3, 4, 1, 5]))
