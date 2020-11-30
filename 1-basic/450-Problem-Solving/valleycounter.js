function countingValleys(step, path) {
  let seaLevel = 0;
  let currLevel = 0;
  let valleys = 0;


  for (let i=0; i< path.length; i++) {
    if(path[i] === 'U') {
      currLevel ++;
      if (currLevel ==0 ){
        valleys++
      }
    } else {
      currLevel--;
    }
  }

  console.log( valleys);
}

countingValleys(8,'UDDDUDUU')
// console.log('kk');
