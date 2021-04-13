

myArray = [
  {receiveId: "one", stockAfter: "red"},
  {receiveId: "two", stockAfter: "blue"},
  {receiveId: "one", stockAfter: "green"},
  {receiveId: "one", stockAfter: "black"}
]



var groups = {};
for (var i = 0; i < myArray.length; i++) {
  var groupName = myArray[i].receiveId;
  if (!groups[groupName]) {
    groups[groupName] = [];
  }
  groups[groupName].push(myArray[i].stockAfter);
}
myArray = [];
for (var groupName in groups) {
  myArray.push({receiveId: groupName, stockAfter: groups[groupName]});
}

console.log(myArray);