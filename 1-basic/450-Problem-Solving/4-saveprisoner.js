// const saveThePrisoner = (n, m, s) => {
//   var left = m%n
//   return s+left-1
// }
//
// console.log(saveThePrisoner(5,2,1))
console.log(0 || 2)

function saveThePrisoner(n, m, s) {
    return (m-1 + s)%n || n;
}
