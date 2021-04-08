/**
 * 
 * @param {number[][]} points 
 * @returns {number}
 */

let minTimeToVisitAllPoints = function(points) {
    let i = 0;
    let result = 0;
    while(i < points.length - 1) {
        let x = Math.abs(points[i][0] - points[i+1][0]);
        let y = Math.abs(points[i][1] - points[i+1][1]);
        result = result + Math.max(x, y);
        i++;
    }

    return result;
}