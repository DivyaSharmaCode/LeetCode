var middleNode = function(head) 
{
  
    // A variable to count the total number of nodes
    let count = 0;
    
    // Creating a new node (value: null)
    const dummyHead = new ListNode(null); 
    
    //dummyhead --> Head
    dummyHead.next = head;
    
    //Storing the value of dummyHead in variables head1 and head2
    let head1 = dummyHead;
    let head2 = dummyHead;
    
    //Counting the total number of nodes
    while(head1.next !== null)
        {
            count++;
            head1 = head1.next;
        }
    
    //if count is even then incremented by 1 (to get the second middle node)
    if(count % 2 === 0)
        {
            count++;
        }
    
    //Accessing the middle node 
    for(let i=0; i<count/2; i++)
        {
            head2 = head2.next;
        }
    
    //Returning the middle node
    return(head2);
       
};