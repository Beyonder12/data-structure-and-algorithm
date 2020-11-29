function kangaroo(x1, v1, x2, v2) {
  if ((x1 < x2) && (v1 < v2))
    return "NO"
   else {
    if ((v1 != v2) && ((x2-x1) % (v1-v2)) == 0 )
      return "YES"
     else
      return "NO"

  }
}

console.log(kangaroo(1,3,1,3))
