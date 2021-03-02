/**
 * @param {string} address
 * @return {string}
 */
// var defangIPaddr = function(address) {
//     let addr = address.split('');
//     for(let i = 0; i < address.length; i++) {
//         if(addr[i] === ".") addr[i] = "[.]";
//     }
//     return addr.join("");
// };

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// var defangIPaddr = function(address) {
//     return address.split('.').join('[.]');
//     };

// var defangIPaddr = function(address) {
//     return address.replace(/\./g,"[.]");
// };

var defangIPaddr = function(address) {
    var result = "";

    for (var i = 0; i < address.length; i++) {
        if(address[i] === ".")
            result += "[.]";
        else 
            result += address[i];
    }
    return result;
};

console.log(defangIPaddr("1.1.1.1"))