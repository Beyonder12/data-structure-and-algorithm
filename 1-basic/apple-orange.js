

function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let n1 = apples.length, n2 = oranges.length, c1 = 0, c2 = 0;

  for (let i = 0; i < n1; i++) {
    appleVal = apples[i] + a;
    (appleVal >= s && appleVal <= t) ? c1++ : c1+=0;
  }

  for (let i = 0; i < n2; i++) {
    orangeVal = oranges[i] + b;
    (orangeVal >= s && orangeVal <= t) ? c2++ : c2+=0;
  }
  console.log(c1);
  console.log(c2);

}

 countApplesAndOranges( 7,11, 5,15, [-2,2,1],[5,-6]) // 1 1
