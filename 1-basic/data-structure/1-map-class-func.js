var Map = function() {
    this.collection = {};

    this.add = (key,value) => {
        this.collection[key] = value;
        return this.collection[key];
    };

    this.remove = (key)=>{
        if(this.collection.hasOwnProperty(key)){
            this.collection.delete(key);
        }
    };

    this.get = (key)=>{
        return this.collection[key];
    }

    this.has = (item)=>{
        return (this.collection.hasOwnProperty(item));
    };

    this.values = ()=>{
        let ar = [];
        for(let v in this.collection) {
            ar.push(this.collection[v]);
        }
        return ar;
    };
    this.size = ()=>(Object.keys(this.collection).length);
    this.clear = ()=>{
        this.collection = {};
    };
};

var m1 = new Map();
m1.add("p1","Tom");
m1.add("p2","Jerry");
m1.add("p3", "Julie");
console.log(m1)
console.log(m1.values());
console.log(m1.size());
m1.clear();

m2 = new Map();
console.log(m2.add(1, 1))
console.log(m2.add(1, 2))
console.log(m2)
