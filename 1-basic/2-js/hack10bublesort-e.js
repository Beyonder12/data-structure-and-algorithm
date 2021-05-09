function countSwaps(a) {
  let numSwap = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j+1]) {
        temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
        numSwap++;
      }
    }
  }
  console.log(`Array is sorted in ${numSwap} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[2]}`);
}

countSwaps([3,2,1]);
