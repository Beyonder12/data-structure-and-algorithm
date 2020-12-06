function insertion(arr) {
    let count = 0;
    const countInversions = arr => {
        if (arr.length <= 1) return arr;
        const leftArr = countInversions(arr.slice(0, arr.length/2)),
        rightArr = countInversions(arr.slice(arr.length / 2));

        let i = 0, j = 0, k = 0, ret = [];

        while ((i <= leftArr.length - 1) && (j <= rightArr.length -1)) {
            if (leftArr[i] <= rightArr[j]) {
                ret[k++] = leftArr[i++];
            } else {
                ret[k++] = rightArr[j++];
                count += (leftArr.length - i);
            }
        }
        
        while(i < leftArr.length) ret[k++] = leftArr[i++];
        while(j < rightArr.length) ret[k++] = rightArr[j++];

        return ret;
    };
    countInversions(arr);

    return count;
}