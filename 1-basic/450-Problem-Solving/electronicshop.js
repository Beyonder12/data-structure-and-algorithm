function getMoneySpent(keyboards, drives, b) {
  let valid = [];
  keyboards.forEach(k => drives.forEach(d => k+d <= b ? valid.push(k+d) : 0));
  return valid.length === 0 ? -1 : Math.max(...valid)
}

console.log(1 <= 1)
