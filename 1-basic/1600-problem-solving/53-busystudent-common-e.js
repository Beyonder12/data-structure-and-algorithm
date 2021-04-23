var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for(let i = 0; i < startTime.length; i++) {
      if(startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
    }
    return count;
  };
  
  // We could use the filter method on Array.prototype to do it.
  const busyStudent = (startTime, endTime, queryTime) => startTime.filter((t, i) => queryTime >= t && queryTime <= endTime[i]).length;
  
  // We could also use the reduce method on Array.prototype to do it.
  const busyStudent = (startTime, endTime, queryTime) => startTime.reduce((prev, t, i) => queryTime >= t && queryTime <= endTime[i] ? prev + 1 : prev, 0);
  
  
  startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
  console.log(busyStudent(startTime, endTime, queryTime))
  