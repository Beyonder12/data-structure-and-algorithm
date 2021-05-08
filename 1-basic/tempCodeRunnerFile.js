for (let  i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 15 !== 0) {
    console.log(i, "flip")
  } else if (i % 5 === 0 && i % 15 !== 0) {
    console.log(i, "flop")
  } else if (i % 15 === 0) {
    console.log(i, "flipflop")
  }else {
    console.log(i)
  }


}
