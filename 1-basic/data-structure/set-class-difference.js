class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
    }
   
    has(element) {
        return this.dictionary[element] !== undefined;
    }

    
    values() {
        return Object.keys(this.dictionary);
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            this.length++;
            return true;
        }

        return false;
    }

    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        }
        return false;
    }

    size() {
        return this.length;
    }

    union(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            newSet.add(value);
        })
        set.values().forEach(value => {
            newSet.add(value);
        })

        return newSet;
    }

    intersection(set) {
        const newSet = new Set();

        let largeSet;
        let smallSet;
        if (this.dictionary.length > set.length) {
            largeSet = this;
            smallSet = set;
        } else {
            largeSet = set;
            smallSet = this;
        }

        smallSet.values().forEach(value => {
            if (largeSet.dictionary[value]) {
                newSet.add(value);
            }
        })

        return newSet;
    }

    difference(set) {
        const newSet = new Set();

        this.values().forEach(value => {
            if (!set.dictionary[value]) {
                newSet.add(value);
            }
        })
        return newSet;
    }
}

var setA = new Set();
var setB = new Set();

console.log(setA.add('a'));
console.log(setA.add('b'));

console.log(setB.add('b'));
console.log(setB.add('d'));

console.log(setA.values());
console.log(setA.intersection(setB))