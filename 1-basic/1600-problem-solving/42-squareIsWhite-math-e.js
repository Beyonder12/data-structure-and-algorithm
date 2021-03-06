

const squareIsWhite = function(coordinates) {
    let horizontals = {
        a : 1,
        b : 2,
        c : 3,
        d : 4,
        e : 5,
        f : 6, 
        g : 7,
        h : 8,
    };
    let horizontalCoordinate = horizontals[coordinates.substr(0,1)];
    let verticalCoordinate = parseInt(coordinates.substr(1,2));
    let sumOfCoordinates = horizontalCoordinate + verticalCoordinate;
    
    return sumOfCoordinates % 2 !== 0;
};

// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.