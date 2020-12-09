// Runtime: 108 ms
// Memory Usage: 45.1 MB
// time O(n^2) space O(n)
var findRestaurant = function(list1, list2){
    const restaurants = []
    let minIndex = Infinity
    
    for(let i = 0; i < list1.length; i++) {
        const restaurant = list1[i]
        const index = list2.indexOf(restaurant)

        if(index >= 0) {
            restaurants.push({
                index: index + i,
                name: restaurant
            })
            minIndex = Math.min(minIndex, index + i)
        }
    }
    return restaurants
        .filter((item) => item.index === minIndex)
        .map((item) => item.name)
};