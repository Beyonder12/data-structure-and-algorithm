var freqAlphabets = function(s) {
    let a = [];
    const dictionary = {
        '1' : 'a',
        '2' : 'b',
        '3' : 'c',
        '4' : 'd',
        '5' : 'e',
        '6' : 'f',
        '7' : 'g',
        '8' : 'h',
        '9' : 'i',
        '10#' : 'j',
        '11#' : 'k',
        '12#' : 'l',
        '13#' : 'm',
        '14#' : 'n',
        '15#' : 'o',
        '16#' : 'p',
        '17#' : 'q',
        '18#' : 'r',
        '19#' : 's',
        '20#' : 't',
        '21#' : 'u',
        '22#' : 'v',
        '23#' : 'w',
        '24#' : 'x',
        '25#' : 'y',
        '26#' : 'z',
  
    }
    console.log(s)
    for(let i = 0; i < s.length; i++) {
      console.log(s[i])
        if(s[i+2] === '#') {
          a .push(dictionary[s[i]+s[i+1]+s[i+2]]);
          i+=2;
        }
        else {
          a.push(dictionary[s[i]])
        }
        
    }
    return a.join('');
    
  };
  
  s = "10#11#12"
  console.log(freqAlphabets(s))
  
  
  const map = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m","14":"n","15":"o","16":"p","17":"q","18":"r","19":"s","20":"t","21":"u","22":"v","23":"w","24":"x","25":"y","26":"z"};
  const freqAlphabets = s => s.replace(/(\d\d#|\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);