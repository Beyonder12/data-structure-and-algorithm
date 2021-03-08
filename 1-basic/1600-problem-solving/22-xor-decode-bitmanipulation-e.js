console.log(2 ^ 6 ^ 12) //8
console.log(2 ^ 6 ^ 8) //12

const decode = (encoded, first) => {
    let result = [first];
    
    for (let i = 0; i < encoded.length; i++) {
        result.push(result[i] ^ encoded[i]);
    };

    return result;
};
console.log(decode([2,6,12], 8))
// const decode = (encoded, first) => {
//     return encoded.reduce(
//         (acc, cv, i) => {
//             acc.push(acc[i] ^ cv);

//             return acc;
//         },
//         [first]
//     );
// }

