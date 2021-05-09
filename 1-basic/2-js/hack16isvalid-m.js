function isValid(str) {
  const charset = new Map();
  for (const chr of str) {
    charset.set(chr, (charset.get(chr) || 0) + 1);
  }

  console.log(charset)
  const items = Array.from(charset.values());
  console.log(items)
  const BASELINE = items[0];
  let diffs = 0;

  for (const curr of items.slice(1)) {
    diffs = curr !== BASELINE ? diffs + 1 : diffs;
  }

  return diffs < 2 ? 'YES' : 'NO';
}

console.log(isValid('aaabbbcccdddee'))
