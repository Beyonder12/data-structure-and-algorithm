function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }

     let arr = [100, 200, 300];
     var node = new ListNode(0);
     for (let i = 0; i < arr.length; i++) {
        
        if (node.val === 0){
            node = new ListNode(arr[i]);
        }
        else {
            curr =  node;
            while(curr.next) {
            curr = curr.next;
            }
         curr.next = new ListNode(arr[i]);
        }
        
     }
     

     console.log(node)

    //  let node = new ListNode(100);
    //  node.next = new ListNode(200);
    //  node.next = new ListNode(300)
    //  console.log(node);