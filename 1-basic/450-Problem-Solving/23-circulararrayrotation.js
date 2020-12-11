// use the concept modular arithmatic

function circularArrayRotation(arr, k, queries) {
    const rotated = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        //see the remainder index location after it is rotated rotated[(i + k) % arr.length] and assign arr[i] to it.
        rotated[(i+k) % arr.length] = arr[i]
    }

    //find the requested indexes
    const result = []
    for (let j of queries) {
        result.push(rotated[j])
    }
    return result
}