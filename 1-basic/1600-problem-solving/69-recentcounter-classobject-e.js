
var RecentCounter = function() {
    this.stream = []
  };
  
  /** 
  * @param {number} t
  * @return {number}
  */
  
  RecentCounter.prototype.ping = function(t) {
    this.stream.push(t) // Everytime we recieve a ping, add the time to the stream of integers
    // this.stream.sort((a,b) => a-b)
  /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
    while(this.stream[0] < t - 3000){ 
      this.stream.shift()
  } 
    // When the loop ends the length of calls will be the length of the array
    return this.stream.length
  };
   
  class RecentCounter1 {
      constructor() {
          this.stream = [];
      }
      
      ping = function (t) {
        this.stream.push(t);
        while(this.stream[0] < t - 3000) {
            this.stream.shift()
        }
      }
  }
  /** 
  * Your RecentCounter object will be instantiated and called as such:
  * var obj = new RecentCounter()
  * var param_1 = obj.ping(t)
  */
  
  const recentCounter = new RecentCounter();
  
//   console.log(recentCounter)
  
  recentCounter.ping(1)
  recentCounter.ping(2);
  recentCounter.ping(300);
  recentCounter.ping(400);
  recentCounter.ping(3000);
  recentCounter.ping(5000);
//   recentCounter.ping(9000);

//   recentCounter.ping(3002);
//   recentCounter.ping(300);
//   recentCounter.ping(3007);
  
  
//   console.log(recentCounter)
  
//======================================================
  const recentCounter1 = new RecentCounter1();
  
  console.log(recentCounter1)
  
  recentCounter1.ping(1)
  recentCounter1.ping(2);
  recentCounter1.ping(300);
  recentCounter1.ping(400);
  recentCounter1.ping(3000);
  recentCounter1.ping(5000);
//   recentCounter.ping(9000);

//   recentCounter.ping(3002);
//   recentCounter.ping(300);
//   recentCounter.ping(3007);
  
  
  console.log(recentCounter1)