function ListNode(ele) {
    this.value = ele;
    this.next = null;
  }
  
  function linkedList(arr){
    let list = new ListNode(arr[0]);
    
    let selectedNode = list;
    for(let i = 1; i < arr.length; i++){
      selectedNode.next = new ListNode(arr[i]);
      selectedNode = selectedNode.next
    } 
  
    return list;
  }
  
//   l = [3, 1, 2, 3, 4, 5];
  
//   console.log(linkedList(l));


var mergeTwoLists = function(l1, l2) {

    var mergeHead = { val : - 1, next: null},
        crt = mergeHead;
  
  
            while(l1 && l2) {
                // let i = 0;
                // console.log(i++)
            if(l1.val > l2.val) {
                crt.next = l2;
                l2 = l2.next;
            } else {
                crt.next = l1;
                l1 = l1.next;
            }
            crt = crt.next;
        }
        crt.next = l1 || l2;
    

    return mergeHead.next;
}

    list1 = [1,2,4];
    list2 = [1,3,4];
    
    l1 = linkedList(list1);
    l2 = linkedList(list2);


    // console.log(l1);
    // console.log(l2);
    console.log(mergeTwoLists(l1,l2).next.next);


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4] 