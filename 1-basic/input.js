var countGoodRectangles = function(rectangles) {
    return rectangles.filter(e=> e[0] < e[1]).length;
    
};

let rectangles = [[5,8],[3,9],[5,12],[16,5]];
console.log(countGoodRectangles(rectangles));
