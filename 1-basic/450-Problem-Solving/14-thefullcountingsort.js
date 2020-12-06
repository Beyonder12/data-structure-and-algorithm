function countSort(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        arr[i][1] = '-'
    }
    let counts = {}, sorted = []
    arr.forEach(ar => counts.hasOwnProperty(ar[0]) ? counts[ar[0]]++ : counts[ar[0]] = 1 )
    for (let n in counts) {
        let numArr = []
        arr.forEach(ar => ar[0] === n ? numArr.push(ar[1]): null )
        sorted.push(numArr)
    }
    console.log(sorted.map(ar => ar.join(' ')).join(' ') )
}

let counts = {}, sorted = [], arr=[1,3,5,7]
