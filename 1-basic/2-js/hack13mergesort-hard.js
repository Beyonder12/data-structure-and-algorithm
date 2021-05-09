function countInversions(arr) {
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
