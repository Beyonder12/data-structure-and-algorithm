
    class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
      }
    }
    Rectangle.prototype.area = function() {
      return(this.w*this.h);
    };

    class Square extends Rectangle {
      constructor(s) {
        super(s);
        this.h = s;
        this.w = s;
      }
    };
    const d = new Square(10,10);

console.log(d.area());
//100
