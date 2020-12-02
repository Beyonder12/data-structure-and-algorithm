/*
2 4 6 8 3

2 4 6 8 8
2 4 6 6 8
2 4 4 6 8
2 3 4 6 8

insertion sort
*/

function insertionSort(n, arr) {
  
  let e = arr[n-1];
  for(let i = n-2; i >=0; i--) {

    if(arr[i] < e) {
      arr[i+1] = e;
      console.log(...arr);
      break;
    }
    else {
      arr[i+1] = arr[i];
      console.log(...arr);
      if(i-1 < 0){
        arr[0] = e;
        console.log(...arr);
      }
    }

  }

}

insertionSort(5,[2,4,6,8,3])
