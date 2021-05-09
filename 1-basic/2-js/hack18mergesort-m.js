


function countInversions1(arr) {
  let count = 0;
  const mergeSort = (array) => {
      if (array.length === 1) {
          return array;
      }
      const length = array.length;
      const middle = Math.floor(length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);

      return merge(mergeSort(left), mergeSort(right));

      function merge(left, right) {
          let result = [];
          let leftIndex = 0;
          let rightIndex = 0;

          while (leftIndex < left.length && rightIndex < right.length) {
              if (left[leftIndex] < right[rightIndex]) {

                  result.push(left[leftIndex]);
                  leftIndex++;
              } else if (left[leftIndex] > right[rightIndex]) {
                  count = count + (left.length - leftIndex)
                  result.push(right[rightIndex]);
                  rightIndex++;
              } else {
                  result.push(left[leftIndex]);
                  leftIndex++;
              }
          }

          // Concat the remaining elements from one of the array
          return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
      }
  };

  mergeSort(arr);
  return count;

}

function countInversions2(arr) {
  let count = 0;
  function swap(arr1, arr2) {
      let i = 0;
      let j = 0;
      let mergedArr = [];
      let remainder;
      while (i !== arr1.length && j !== arr2.length) {
          if (arr1[i] < arr2[j] || arr1[i] === arr2[j]) {
              mergedArr.push(arr1[i]);
              i++;
          } else {
              mergedArr.push(arr2[j]);
              count += (arr1.length - i);
              j++;
          }
      }
      remainder = i >= j ? arr2.slice(j) : arr1.slice(i);
      return mergedArr.concat(remainder);
  }

  function mergeSort(arr) {
      if (arr.length <= 1) return arr;
      let middle = Math.floor(arr.length / 2);

      let left = mergeSort(arr.slice(0, middle))
      let right = mergeSort(arr.slice(middle, arr.length))

      return swap(left, right);
  }

  mergeSort(arr);

  return count;
}
