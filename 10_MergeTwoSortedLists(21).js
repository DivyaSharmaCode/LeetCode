var mergeTwoLists = function(l1, l2) 
{
  
    let temp = new ListNode(-1); //creating new node in the beginning
    let sorted = temp;
    
    while(l1 !== null && l2 !== null) //sorting and linking
        {
            if(l1.val <= l2.val)
                {
                    temp.next = l1;
                    l1 = l1.next;
                }
            else
                {
                    temp.next = l2;
                    l2 = l2.next;
                }
            temp = temp.next;
        }
    
     if(l1 !== null)
        {
            temp.next = l1;
        }
     else
        {
           temp.next = l2;
        } 
    return sorted.next;
};