// Definition for singly-linked list.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
};



const getDecimalValue = head => {
    let val = 0;
    while (head) {
        val = (val << 1) | head.val;
        head = head.next;
    }
    return val;
};

