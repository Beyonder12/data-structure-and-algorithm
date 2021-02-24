
// BFS (Level Order)
// var maxDepth = function(root) {
//     if(!root) return 0;
//     // using BFS and counting levels
//     // not recommended to use array as queue
//     let levels = 0; queue = [];
//     queue.push(root);

//     while(queue.length > 0) {
//         let count = queue.length;

//         for(let i = 0; i < count; i++) {
//             const node = queue.shift();
//             if(node.right) queue.push(node.right);
//             if(node.left) queue.push(node.left);
//         }
//         levels++;
//     }
//     return levels;
// }

// DFS (Recursion)
var maxDepth = function(root) {
    if(!root) return null;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

}

// root = [3,9,20,null,null,15,7]
root =  {
    value: 3,
    left: { value: 9, left: null, rigth: null},
    right: { value: 20, left: {value: 7, left: null, right: null}, right: {value: 15, left: null, right: null}}
}
console.log(root.left)
console.log(maxDepth(root))
console.log(Math.max(null, null))