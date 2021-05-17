function Skiplist() {
  this.arr = [];
  this.size = 0;
}

Skiplist.prototype.search = function(target) {
  for(let i = 0; i < this.size; i++) {
    if(this.arr[i] === target) return true;
  }
  return false;
}

Skiplist.prototype.add = function(num) {
  if(this.size === 0) this.arr.push(num);
  for (let i = 0; i < this.size; i++) {
    if(num >= this.arr[i]) {
      this.arr.splice(i+1, 0, num);
      break;
    }
  }
  this.size++;
  return this;

}

Skiplist.prototype.erase = function(num) {

}

let sl = new Skiplist();
console.log(sl.add(2));
console.log(sl.add(1));
// console.log(sl.add(1));
// console.log(sl.add(1));
console.log(sl)

let a = [1,2,3]
a.splice(4,0,4)
console.log(a)
