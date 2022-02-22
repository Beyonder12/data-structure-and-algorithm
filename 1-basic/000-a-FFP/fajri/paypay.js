// Input: Dictionary = {POON, PLEE, SAME, POIE, PLEA, PLIE, POIN}
//        start = TOON
//        target = PLEA
// Output: 7
// TOON - POON - POIN - POIE - PLIE - PLEE - PLEA

// Input: Dictionary = {ABCD, EBAD, EBCD, XYZA}
//        Start = ABCV
//        End = EBAD
// Output: 4
// ABCV - ABCD - EBCD - EBAD

function magic(start, target, dictionary) {

    let targetMap = {};
    for(t of target) {
        targetMap[t] = (targetMap[t] + 1) || 1;
    }

    console.log(targetMap)

    // for(d of dictionary) {
    //     let map = {};
    //     for(s of start) {
    //         map[s] = (map[s] + 1) || 1;
    //     }
    // }
}

magic("TOON", "PLEA", ['POON', 'PLEE', 'SAME', 'POIE', 'PLEA', 'PLIE', 'POIN'])