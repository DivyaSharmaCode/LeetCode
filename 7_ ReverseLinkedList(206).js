var reverseList = function(head) 
{
  
    let prevN = null;     //null  1-->2
                          // p    h   n
    
    while(head !== null)
        {
            let nextN = head.next; //above
            
            head.next = prevN;     //null <-- 1       2
                                   // p       h       n        
            prevN = head;     // 1 <-- 1
                              // p     h
            head = nextN;     // 1 <-- 2
                              // p     h            
        }
    return prevN;
    
};