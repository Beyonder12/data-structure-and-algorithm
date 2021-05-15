function OrderedStream(n) {
  this.parts = new Array(n);
  this.head = 0;
}

OrderedStream.prototype.insert = function (id, value) {
  this.parts[id-1] = value;

  let res = [];
  if (id - 1 === this.head) {
    while(this.parts[this.head]) {
      res.push(this.parts[this.head++]);
    }
  }
  return res;

}


let os = new OrderedStream(5);
console.log(os)
console.log(os.insert(3, 'ccccc'))
console.log(os)
