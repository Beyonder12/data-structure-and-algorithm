// var a = () => {
//   let i = 1;
//   if(i) {return "ini benar"};
// }

// console.log(a())


//  function week(year, month_number) {

//   var firstOfMonth = new Date(year, month_number-1, 1);
//   var lastOfMonth = new Date(year, month_number, 0);

//   var used = firstOfMonth.getDay() + lastOfMonth.getDate();

//   return Math.ceil( used / 7);
// }

// console.log(week(2020, 12))
// var a = 1
// let curr = new Date('12/'+ a + '/2020')
// let week = []

// for (let i = 1; i <= 7; i++) {
//   let first = curr.getDate() - curr.getDay() + i 
//   let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
//   week.push(day)
// }

// console.log(week)

// var d = new Date();
// var date = d.getDate();
// var day = d.getDay();

// var weekOfMonth = Math.ceil((date - 1 - day) / 7);
// console.log(weekOfMonth)

// Date.prototype.getWeekOfMonth = function () {
//   var firstDay = new Date(this.setDate(1)).getDay();
//   var totalDays = new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
//   return Math.ceil((firstDay + totalDays) / 7);
// }

// var totalWeeks = new Date().getWeekOfMonth();
// console.log('Total Weeks in the Month are : '+ totalWeeks ); 

// var date = new Date(), y = date.getFullYear(), m = date.getMonth();
// var firstDay = new Date(y, m, 1);
// var lastDay = new Date(y, m + 1, 0);
// console.log(date)
// console.log(firstDay)
// console.log(lastDay)
// console.log(y)
// console.log(m)

// console.log([].reduce((a,b) => a+b))

var startOfMonth = moment().month("June").startOf("month").toDate()
var endOfMonth   = moment().month("June").endOf("month").toDate()

console.log(startOfMonth)

var start = new Date();
start.setHours(0,0,0,0);

var end = new Date();
end.setHours(23,59,59,999);

console.log(start, end)   