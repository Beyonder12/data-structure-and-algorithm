/**
 * 
 * @param {number[]} arr 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number}
 */

let countGoodTriplets = function(arr, a, b, c) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) > a) continue;

            for (let k = j+1; k < arr.length; k++) {
                if(Math.abs(arr[j] - arr[k]) > b) continue;
                if(Math.abs(arr[k] - arr[i]) <= c) res++;
            }
        }
    }

    return res;
};

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
// const countGoodTriplets = (arr, a, b, c) => {
// 	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				const conditions = [
					Math.abs(arr[i] - arr[j]) <= a,
					Math.abs(arr[j] - arr[k]) <= b,
					Math.abs(arr[i] - arr[k]) <= c,
				];

				if (conditions.indexOf(false) === -1) count++;
			}
		}
	}

	return count;
};