console.log([
  ['amy', 100],
  ['aby', 100],
  ['david', 100],
  ['heraldo', 50],
  ['aakansha', 75],
  ['aleksa', 150]
].sort((a, b) => (
    (b[1] - a[1]) ||
    (a[0].charCodeAt(0) - b[0].charCodeAt(0))
)))
