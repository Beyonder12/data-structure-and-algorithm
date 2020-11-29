function countingValleys(step, path) {
  let seaLevel = 0;
  let currLevel = 0;
  let valleys = 0;

  path = path.split('');
  for (let i=0; i< path.length; i++) {
    if(path[i] === 'U') {
      currentLevel ++;
      if (currentLevel ==0 ){
        valleys++
      }
    } else {
      currLevel--;
    }
  }

  return valleys;
}

console.log(countingValleys(8,['UDDDUDUU']))
