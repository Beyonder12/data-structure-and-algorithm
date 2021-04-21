/**
 * 
 * @param {number [][]} rectangles 
 * @returns {number}
 */

const countGoodRectangles = rectangles => {
    let maxLen = getMaxLen(rectangles);
    let res = 0;

    for(let [l,w] of rectangles) {
        res += canMakeSquareWithSideLength(maxLen, l, w);
    }

    return res;
};

function getMaxLen(rects) {
    return Math.max(
        ...rects.map((e) => Math.min(e[0],e[1]))
    );
}

function canMakeSquareWithSideLength(length, l, w) {
    return l >= length && w >= length;
}

rectangles = [[5,8],[3,9],[5,12],[16,5]]

console.log(countGoodRectangles(rectangles))

// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

// Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
// Output: 3
// Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.