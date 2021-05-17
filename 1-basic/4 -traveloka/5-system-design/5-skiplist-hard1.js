function Skiplist() {
  let m = new Map(); // record elements with occurrence/count
  this.m = m;
  return {
      get,
      search,
      add,
      erase
  }

  function get() {
    return m;
  }

  function search(target) {
      return m.has(target);
  }

  function add(num) {
      m.set(num, m.get(num) + 1 || 1); // if exists, count++, otherwise, set default 1
  }

  function erase(num) {
      if (!m.has(num)) return false;
      let v = m.get(num);
      if (v == 1) { // num only has 1, after erase it will become 0, so delete it directly
          m.delete(num);
      } else { // num has more than 1, erase 1, count--
          m.set(num, v - 1);
      }
      return true;
  }
}

let sl = new Skiplist();
console.log(sl.add(2));
console.log(sl.add(1));
// console.log(sl.add(1));
// console.log(sl.add(1));
console.log(sl.get())
