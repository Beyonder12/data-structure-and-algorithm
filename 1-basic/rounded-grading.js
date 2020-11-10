/*
l = length, rg = rounded grades, diff = difference, count = counter, diff = difference

*/


/**
* @param {array} grades
* @return {array}
*/

function gradingStudents(grades) {
    let l = grades.length, rg = [];
    for (let i = 0; i < l; i++) {
        let diff = multiply(grades[i]);
        let fg = diff + grades[i];

        if ( diff < 3 && fg >= 40) {
            rg.push(fg);
        } else {
            rg.push(grades[i]);
        }
    }

    return rg;
}

function multiply(x) {
    let count = 0;
    while ( x % 5 != 0) {
        x++;
        count++;
    }
    return count;
