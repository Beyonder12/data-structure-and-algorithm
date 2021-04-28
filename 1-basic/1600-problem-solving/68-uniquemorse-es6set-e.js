var uniqueMorseRepresentations = function(words) {
    const morse = { 
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--.." 
    };
    
    let newArr = [], count = 0;
    for(let i = 0; i < words.length; i++) {
        let str = '';
        for(let j = 0; j < words[i].length; j++) {
            str += morse[words[i][j]];
        }
        newArr.push(str)
    }
   
    newArr = new Set(newArr)
    
    return newArr.size;
  };

//   Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".