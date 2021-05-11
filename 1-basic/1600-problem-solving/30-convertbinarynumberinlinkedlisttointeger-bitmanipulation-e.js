// Definition for singly-linked list.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
};

// Since the value in the linked list is binary, we can get the final
// easily via bit operator. And the only thing we need to do right
// now is traversal the linked list. Here's the code:

const getDecimalValue = head => {
    let val = 0;
    while (head) {
        val = (val << 1) | head.val;
        head = head.next;
    }
    return val;
};

/*
Update: add some explanation for the bit manipulation.

First, the << operation means to move to left by n bit in the binary
representation. So, if the binary representation is 100, we could make it
by 1 << 3 or 3 times to move to left by 1 bit. Then, the | operation
has almost the same logic as || but its for bit manipulation.
But here in my code, I use it in a tricky way -- to add the hea
 
 */