// We don't need to do the operation for all cells. 
// We just need to know the operation count for every row and column, 
// and based on that, we can calculate whether each cell is odd.

// Traversal the indices and counting for every row and column
// Traversal all the cells and check whether the value is odd


const oddCells = (row, column, indices) => {
  const rowCount = new Uint8Array(row);
  const columnCount = new Uint8Array(column);
  let ret = 0;

  for (let i = 0; i < indices.length; ++i) {
    ++rowCount[indices[i][0]];
    ++columnCount[indices[i][1]];
  }

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      ((rowCount[i] ^ columnCount[j]) & 1) === 1 && ++ret;
    }
  }

  return ret;
};

// Time complexity: O(indices.length + row * column)
// Space complexity: O(row + column)
ret = 0;
for (let i = 0; i < 3; i++) {
  console.log(true && ++ret)
}


const oddCells1 = (n, m, indices) => {
  let count = 0; 
  let matrix = Array.from({length : n}, () => Array.from({length: m}, () => 0));

  // Iterate trough indices
  for (const [r, c] of indices) {
    // update cols
    for(let i = 0; i < n; i++) matrix[i][c]++
    // update rows
    for (let i = 0; i < m; i++) matrix[r][i]++
  }

  // Iterate through out matrix and get number of odds
  matrix.forEach(arr => {
    arr.forEach(cv => cv % 2 !== 0 ? count++ : null)
  })

  return count;
}

console.log( [ [1, 3, 1], [1, 3, 1] ],
  oddCells(2, 3, [
      [0, 1],
      [1,1],
  ])
);

console.log( [ [2, 2], [2, 2] ],
  oddCells(2, 2, [
      [1, 1],
      [0,0],
  ])
);