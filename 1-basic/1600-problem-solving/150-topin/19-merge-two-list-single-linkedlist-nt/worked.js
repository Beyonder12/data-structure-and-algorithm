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
  
  l = [3, 1, 2, 3, 4, 5];
  
  console.log(linkedList(l));