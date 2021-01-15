var reverseString = function (s) {
    let i = 0,
      j = s.length - 1;
    while (i < j) {
      const temp = s[j];
      s[j] = s[i];
      s[i] = temp;
      i++;
      j--;
    }
    return s;
  };

  console.log(reverseString([1,2,3,4,5]));