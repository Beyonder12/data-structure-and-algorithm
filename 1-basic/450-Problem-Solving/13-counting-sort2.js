function countingSort(arr) {
    let indexs = new Array(100).fill(0)
    arr.forEach(n => {indexs[n]++})
    let sorted = []
    indexs.forEach((n,i) => {
        if (n > 0) {


            while ( n > 0) {
                sorted.push(i)
                n--
            }
        }
    })

    return sorted
}