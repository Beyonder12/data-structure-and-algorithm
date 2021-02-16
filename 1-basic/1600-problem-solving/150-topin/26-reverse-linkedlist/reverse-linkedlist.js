/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *      this.val = (val === undefined ? 0 : val)
 *      this.next = (next === undefined ? null : next)
 * }
 */
 /**
  * @param {ListNode} head
  *@return {ListNode}
  */

  let head = {val : 100, next : {val : 200, next : {val:300, next: null}}}
  var reverseList = function(head) {
      let [prev, current] = [null, head];

     
      
      while(current) {
        
        [current.next, prev, current] = [prev, current, current.next]; 
        

      }
      return prev;
  }


//   reverseList(head)
  console.log(reverseList(head))
// let [prev, current] = [null, head];

// [current.next, prev, current] = [prev, current, current.next]; 

// console.log(current)
// console.log(prev)


