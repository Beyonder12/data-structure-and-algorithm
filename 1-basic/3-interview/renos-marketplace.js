
// data:

// mobil
// mobil/toyota
// mobil/toyota/avanza
// mobil/toyota/innova
// mobil/daihatsu
// mobil/daihatsu/xenia
// mobil/daihatsu/ayla
// mobil/nissan
// mobil/nissan/juke
// mobil/nissanlivina
// motor
// motor/honda
// motor/honda/vario
// motor/honda/cbr
// motor/yamaha
// motor/yamaha/mio
// motor/yamaha/r15
// motor/suzuki
// motor/suzuki/spin
// motor/suzuki/satria

// soal:

// 1. Buatlah design table untuk data yang diberikan
// 2. buatlah code menggunakan bahasa pemograman apa saja untuk menampilkan data seperti format data yang diberikan
// 3. buatlah code menggunakan bahasa pemograman apa saja untuk menampilkan data seperti berikut:
//   3.1. bila diberikan parameter motor/yamaha, maka expected result yang diharapkan adalah motor,motor/yamaha,motor/yamaha/mio,motor/yamaha/r15
//   3.2. bila diberikan parameter mobil maka expected result yang diharapkan adalah mobil ,mobil/toyota ,mobil/toyota/avanza ,mobil/toyota/innova ,mobil/daihatsu ,mobil/daihatsu/xenia ,mobil/daihatsu/ayla ,mobil/nissan

let database =  [
    {
        mobil : [
            {
                toyota : [
                    "avanza"
                ]
            },
            {
                daihatsu : [
                    "xenia",
                    "ayla"
                ]
            }
        ]
    },
    {
        motor : [
            {
                honda : [
                    "vario",
                    "cbr"
                ]
            },
            {
                yamaha : [
                    "mio",
                    "r15"
                ]
            },
            {
                suzuki : [
                    "spin",
                    "satria"
                ]
            }
        ]
    }
]

console.log(JSON.stringify(database));
console.log(database[0].mobil);

let data = [
    "mobil",
    "mobil/toyota",
    "mobil/toyota/avanza",
    "mobil/daihatsu",
    "mobil/daihatsu/xenia",
    "mobil/daihatsu/ayla",
    "mobil/nissan",
    "mobil/nissan/juke",
    "mobil/nissanlivina",
    "motor",
    "motor/honda",
    "motor/honda/vario",
    "motor/honda/cbr",
    "motor/yamaha",
    "motor/yamaha/mio",
    "motor/yamaha/r15",
    "motor/suzuki",
    "motor/suzuki/spin",
    "motor/suzuki/satria",
]

function getData(param) {
    let res = [], paramSplit = param.split("/");
    for( d of data) {
        let arraySplit = d.split("/");
        let indexMeet = arraySplit.indexOf(paramSplit[0]);
        let count = 0;
        // console.log("arraySplit", arraySplit)
        for(let i = 0,j = indexMeet; i < paramSplit.length; i++,j++) {
            count++;
        }
        if(count == paramSplit.length) res.push()
       
    }
  
    console.log("this is the result : ", res);
}

getData("daihatsu")

// let test = "123/124"
// console.log(test.split("/"));


//Unit Test Framework

console.log();
console.log("====Simple Unit Test Framework====");

function additionPositive(a, b) {
    if(a< 0 || b<0)  return 0; //50%
    else if(typeof(a) == typeof("")) return "this is must number";
    return a + b;
}

let count = 0;
let mockValue1 = 4;
let mockValue2 = 0;
let mockValue3 = "this is must number";
console.log();
console.log("This is unit test for positive!")
console.log("Expected value : ", mockValue1, ", Actual value: ", additionPositive(2,2), ", Result: ",mockValue1 == additionPositive(2,2))
count += mockValue1 == additionPositive(2,2)
console.log();

console.log("This is unit test for for negative!")
console.log("Expected value : ", mockValue2, ", Actual value: ", additionPositive(-2,-2), ", Result: ",mockValue2 == additionPositive(-2,-2))
count += mockValue2 == additionPositive(-2,-2)
console.log();

console.log("This is unit test for for string parameters!")
console.log("Expected Value : ", mockValue3, ", Actual Value: ", additionPositive("",2), ", console.log();Result: ", mockValue3 == additionPositive("",2))
count += mockValue3 == additionPositive("",2)
console.log();

console.log();
console.log("Test passed: ", count);

console.log("this is must number" == "this is must number")

console.log();

num = 
console.log(num ^ 1)