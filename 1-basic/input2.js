// function test (x, a, b, i, j) {
//   let k = j, ct = 0;

//   while(k > i -1) {
//     if( x[k] <= b && !(x[k] <= a)) ct++;
//     k--;
//   }
//   return ct;
// }

// let x = [11, 10, 10, 5, 10, 15, 20, 10, 7, 11]
// console.log(test(x, 8, 18, 3, 6))
// console.log(test(x, 10, 20, 0, 9))
// console.log(test(x, 8, 18, 6, 3))
// console.log(test(x, 20, 10, 0, 9))
// console.log(test(x, 6, 7, 8, 8))


// function g (str) {
//   let i = 0, new_str = '';
//   while(i <str.length - 1) {
//     new_str = new_str + str[i + 1];
//     i++
//   }
//   return new_str;

// }

// function f (str) {

//   if (str.length === 0) {
//     return '';
//   } else if (str.length === 0) {
//     return str;
//   } else {
//     return f(g(str)) + str[0]
//   }


// }
// function h (n, str) {
//   while ( n != 1) {
//     if (n % 2 === 0) {
//       n = n / 2;
//     } else {
//       n = 3*n + 1;
//     }
//     str = f(str);
//   }
//   return str;

// }

// function pow(x, y) {
//   if (y === 0) {
//     return 1
//   } else {
//     return x * pow(x, y - 1)
//   }
// }

// console.log(h(1, "fruits"));
// console.log(h(2, "fruits"));
// console.log(h(3, "fruits"));
// console.log(h(pow(2, 1000000000000000), "fruits"));
// console.log(h(pow(2, 9831050005000007), "fruits"));

// there is 100 data
a = [
929,
5611,
10,
979,
9683,
30,
210,
9269,
42,
3329,
6512,
74,
4,
9898,
10,
872,
9515,
67,
28,
9998,
9,
1805,
5374,
9354,
1422,
5099,
4572,
1701,
4404,
89,
481,
9188,
7,
77,
9712,
98,
14,
322,
33,
317,
9053,
98,
489,
9963,
44,
889,
9263,
54,
1040,
8776,
65,
963,
9726,
54,
637,
9598,
85,
395,
9330,
24,
2319,
3904,
61,
581,
2096,
7320,
412,
9934,
74,
591,
9032,
74,
308,
436,
65,
17,
9989,
8,
923,
9891,
37,
66,
9099,
87,
226,
9293,
1,
3174,
5397,
5555,
605,
4505,
4774,
8,
9929,
3,
927,
9245,
21,
4760,
5859,
7,
6863,
8650,
6835,
311,
372,
51,
5527,
8281,
6495,
5845,
6760,
9567,
7,
9301,
75,
7670,
9957,
1571,
2363,
4544,
3501,
229,
470,
51,
25,
9925,
7,
492,
9167,
91,
108,
421,
54,
152,
492,
14,
1345,
5050,
2013,
5493,
7874,
3,
128,
318,
25,
2069,
4968,
2487,
15,
9981,
5,
346,
9444,
7,
223,
9657,
34,
2,
9982,
1,
5713,
7064,
7276,
375,
9428,
70,
958,
9513,
38,
733,
9733,
37,
106,
9098,
29,
6936,
9138,
1862,
1386,
3170,
2459,
7694,
9791,
57,
398,
9725,
7,
816,
9723,
77,
2053,
5846,
6506,
12,
9906,
2,
30,
548,
9029,
5998,
5998,
5998,
4861,
6647,
4419,
993,
1652,
866,
6164,
7618,
3499,
2363,
4762,
3661,
83,
420,
36,
711,
9200,
84,
736,
9697,
35,
979,
9808,
50,
1854,
5712,
9457,
5083,
9658,
6527,
5540,
5540,
5540,
641,
9957,
33,
118,
287,
8772,
201,
9153,
54,
21,
9909,
6,
302,
9933,
19,
8465,
8465,
8465,
822,
9339,
43,
407,
9654,
88,
3943,
9519,
68,
424,
9805,
29,
707,
9072,
79,
79,
9337,
32,
11,
9823,
92,
8,
9237,
78,
642,
9677,
67,
286,
1331,
95,
4549,
5968,
9460,
473,
6271,
5916,
5279,
5314,
8676,
17,
9992,
4,
4369,
7601,
42,
]
// {count++} console.log(count)
// console.log(a.length)

// for (let i = 0; i < a.length -1; i+=3) {

//     function divisibleNumber(A, B, K) {
//       let count = 0;
//       for (let i = A; i <= B; i++) {
//         if (i % K === 0) count ++
//       }
//       return count;
//     }
//     let A = a[i], B = a[i+1], K = a[i + 2];
//     let ans = divisibleNumber(A, B, K)
//     console.log(`Case ${(i/3) + 1}: ${ans}`)
// }



for (var i=1; i < 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}


var bitmask;
var characters;
var running;
function permutations() {
    var i;
    if(running.length == characters.length) {
        console.log(running.join(''));
    } else {
    for(i=0; i<characters.length; i++) {
            if ( ((bitmask>>i)&1) == 0 ) {
                running.push(characters[i]);
                bitmask |= (1<<i);
                permutations();
                running.pop();
            }
        }
    }
}

var input = document.getElementById('stdin').value;
characters = input.split('');
running = [];
bitmask = 0;
permutations();


