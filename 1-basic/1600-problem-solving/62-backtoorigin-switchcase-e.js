/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let x = 0, y = 0, values = {L: -1, D: -1, R: 1, U: 1};
    for(let i = 0; i < moves.length; i++) {
        // console.log(moves[i] === 'L' || moves[i] === 'R' )
        // console.log(values[moves[i]])
        (moves[i] === 'L' || moves[i] === 'R') ? x += values[moves[i]] : y += values[moves[i]];
    }
  
    return (x===0 && y===0) ? true : false;
    
  };
  
  var judgeCircle1 = function(moves) {    
    let x=0,y=0
    for(i=0;i<moves.length;i++){
        switch (moves[i]) {
            case 'R':
                x++;
                break;
            case 'L':
                x--;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
        }
    }
     return x === 0 && y === 0
  
    
  };
  moves = 'UD'
  moves1 = 'LL'
  
  
  console.log(judgeCircle(moves))
  console.log(judgeCircle1(moves1))
  console.log('====================')
  console.log('ok')
  
  
  // Input: moves = "UD"
  // Output: true
  // Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.