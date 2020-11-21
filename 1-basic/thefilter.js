function getCount(objects) {
  return objects.filter((item) => {return item.x == item.y}).length
}

let ag = [
  {x: 1, y: 1},
  {x: 1, y: 1},
  {x: 1, y: 1},
  {x: 1, y: 2},
]

console.log(getCount(ag))
