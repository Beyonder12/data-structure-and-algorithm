const catAndMouse = (x,y,z) => {

  const distanceCatA = Math.abs(x-z)
  const distanceCatB = Math.abs(y-z)

  if (distanceCatA === distanceCatB) {
    console.log ('Mouse C')
  } else if (distanceCatA < distanceCatB) {
    console.log ('CAT A')
  } else {
    console.log ('CAT B')
  }
}

catAndMouse(1,2,3)
