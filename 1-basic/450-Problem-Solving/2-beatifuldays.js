function beatifulDays(i, j, k) {
  let beatifulDays = 0;
  while (i <= j) {
    let reversed = i.toString().split('').reverse().join('');
    if ((i - reversed) % k ===0) beatifulDays++;
    i++
  }
  return beatifulDays;
}

console.log(beatifulDays(20,23,6));
