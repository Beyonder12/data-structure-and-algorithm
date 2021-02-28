
//   Definintion for singly-linked list.
  function ListNode(val) {
       this.val = val;
       this.next = null;
  }
 
//   console.log(new ListNode(100))


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};


//  l1 = {value = 1, next = {value: 2, next: { value: 0, next = null}}};
//  l2 = {value = 1, next = {value: 2, next: { value: 0, next = null}}};

 

l1 = new ListNode(3);
l2 = new ListNode(4);

l1.next = new ListNode(4);
l2.next = new ListNode(6);

l1.next.next = new ListNode(2);
l2.next.next = new ListNode(5);

// l1 = JSON.parse(JSON.stringify(l1));
// l2 = JSON.
// parse(JSON.stringify(l2));

console.log(l1);
console.log(l2);
// console.log(JSON.parse(JSON.stringify(l1)));
// console.log(JSON.parse(JSON.stringify(l2)));

console.log(addTwoNumbers(l1, l2))
//  console.log(JSON.parse(JSON.stringify(addTwoNumbers(l1, l2))));

