class OrderedStream {
    // Define a contruction function and set some values as object properties to keep our data persistent between invocations
    constructor() {
        this.pointer = 0;
        // This will create an array of length (n) and set all values to 'undefined'
        this.list = Array.from({length: n});
    }

    insert(id, value) {
        // Will be used to store values that pass the condition and to be returned
        let chunk = [];
        // Since array indices start from zero and id in this problem from 1 we need to decrement it
        this.list[id - 1] = value
        // Every time we insert a value we have to look if there is a value at the index (pointer) that should returned
        // If there is any we copy it and then iterate to the next element until the condtion is no longer true
        while(this.list[this.pointer]) {
            chunk.push(this.list[this.pointer])
            this.pointer++;
        }
        return chunk;
    }
}