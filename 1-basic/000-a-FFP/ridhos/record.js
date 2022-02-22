// function solution(record) {
//     var answer = [];

//     let ids = new Set();
//     for(e of record) {
//         e = e.split(" ");
//         ids.add(e[1]);
//     }
//     idsArr = Array.from(ids);

//     let user = [];

//     for(let i = 0; i < record.length; i++) {
//         let splitStr = record[i].split(" ") //["Enter", "uid1234", "Spiderman"]

//         switch(splitStr[0]) {
//             case "Enter":
//               answer.push(splitStr[2] + " came in.")
//               break;
//             case "Leave":
//               answer.push(splitStr[2] + " has left.")
//               break;
//             default:
//               answer.push("")
//           }
//     }

//     return answer;
// }

// console.log(solution(["Enter uid1234 Spiderman", "Enter uid4567 Ironman", "Leave uid1234"]))
// record:
// ["Enter uid1234 Spiderman", "Enter uid4567 Ironman", "Leave uid1234", "Enter uid1234 Ironman", "Change uid4567 Hulk"]
 
// answer:
// ["Ironman came in.", "Hulk came in.", "Ironman has left.", "Ironman came in."]


// function solution(record) {
//     var answer = [];

//     let code = [];

//     let map = new Map();
    
//     for(let element of record) {
//         element = element.split(" ");
//         map.set(element[1], {status : element[0], userName: element[2] ? element[2] : map.get(element[1]).userName  })
//         if(map.get(element[1]).status == "Enter") {
//             code.push(map.set(0, map.get))
//         } else if(map.get(element[1]).status == "Leave") {
//             code.push(map.set(1, uid)
//         } 
//     }


//     return answer;
// }

// console.log(solution(["Enter uid1234 Spiderman", "Enter uid4567 Ironman", "Leave uid1234", "Enter uid1234 Ironman", "Change uid4567 Hulk"]))


// function solution(record) {
//     var answer = [];

//     let t = 0;

//     let map = new Map();
    
//     for(let element of record) {
//         element = element.split(" ");
//         map.set(t, {uid : element[1], status : element[0], userName: element[2] })
//         if(map.get(t).status == "Change") {
//             let past = t-1;
//             while(past--) {
//                 if(map.get(past).uid === map.get(t).uid) {
//                     map.set(past, {uid : element[1], status : map.get(past).status, userName: map.get(t).userName })
//                 }
//             }
//         } 
//         t++;
        
//     }
//     console.log(map)


//     return answer;
// }
// console.log(solution(["Enter uid1234 Spiderman", "Enter uid4567 Ironman", "Leave uid1234", "Enter uid1234 Ironman", "Change uid4567 Hulk"]))


function solution(record) {
    var answer = [];

    let code = [];

    let map = new Map();
    
    for(let element of record) {
        element = element.split(" ");
        map.set(element[1], {userName: element[2] ? element[2] : map.get(element[1]).userName})
        if(element[0] == "Enter") {
            code.push({0: element[1]});
            map.set(element[1], {userName: element[2]});
        } else if(element[0] == "Leave") {
            code.push({1: element[1]});
        } else if(element[0] == "Change") {
            map.set(element[1], {userName: element[2]});
        }        
    }
    console.log(map)
    console.log(code)
    for(let element of code) {
       if(element['0']) {
            answer.push(map.get(element['0']).userName + " came in.");
       } else if(element['1']) {
            answer.push(map.get(element['1']).userName + " has left.");
        }      
    }
    return answer;
}

let record = ["Enter uid1 Ridho", "Enter uid2 Pasopati", "Leave uid1", "Enter uid1 Ripas", "Change uid2 Pasri", "Enter uid3 Joko"];
console.log(solution(record));