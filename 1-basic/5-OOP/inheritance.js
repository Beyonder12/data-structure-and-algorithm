class SomeClass {
  #myProp = 2;

  get myProp() {
    return this.#myProp;
  }
}


let sc = new SomeClass();
console.log(sc)
console.log(sc.get myProp())
