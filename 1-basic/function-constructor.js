function rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
}

let a = new rectangle(2,3)
console.log(a.area)
