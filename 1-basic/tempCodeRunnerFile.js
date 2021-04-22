

// SOLUTION 1 - Map
// We could use a map to store the status of city:

// If it's a start of path, make the value plus 1.
// If it's a end of path, make the value minus 1.
// Finally, most cities will be 0. The start of whole path will be 1. And the destination city will be -1.

const destCity = (paths) => {
  const map = new Map();
  console.log(map)
  for (const path of paths) {
    map.set(path[0], map.has(path[0]) ? 0 : 1);
    map.set(path[1], map.has(path[1]) ? 0 : -1);
    console.log(map)
  }
  for (const item of map) {
    if (item[1] === -1) return item[0];
  }
};

paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
console.log(destCity(paths))

// SOLUTION 2 - Set
// Actually, we don't need all informations. So, we may not to store them but just a mark.

// Here we use a Set to store the mark:

// We mark all start of paths.
// The destination city must not be in this set.

const destCity = (paths) => {
  const set = new Set();
  for (const path of paths) set.add(path[0]);
  for (const path of paths) {
    if (!set.has(path[1])) return path[1];
  }
};