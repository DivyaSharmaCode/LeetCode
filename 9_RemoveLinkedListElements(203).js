var removeElements = function(head, val) 
{

    //Checking if the list is empty
    if(head === null)
        {
            return null;
        }
    
    // Creating a new node (value: -1 (anyvalue))
    let temp = new ListNode(-1); 
    
    //temp --> Head
    temp.next = head; 
    
    //Assigning temp as the head node
    head = temp; 
    
    //Traversing the list
    while(temp.next !== null)
        {
            if(temp.next.val === val) 
                {
                    temp.next = temp.next.next; //jumping 1 node ahead
                }
            else
                {
                    temp = temp.next;
                }
        }
    
    return head.next;
};