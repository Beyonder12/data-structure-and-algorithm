// declaring
let [h,l]=[scores[0], scores[0]];
let [ max, min ] = [ 0, 0];

//processing
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > h) { h = scores[i]; max++;}
  if (scores[i] < l) { l = scores[i]; min++;}
}

//Returnin
return [ max, min ];


// the other option
/*
function breakingRecords(scores) {
  var h = [scores[0]];
  var l = [scores[0]];
  scores.forEach((e) => {
    if (e>h.reduce((a,c)=>Math.max(a,c))) h.push(e);
    if (e<l.reduce((a,c)=>Math.min(a,c))) l.push(e);
  });

  return [h.length-1,l.length-1]

}

*/
