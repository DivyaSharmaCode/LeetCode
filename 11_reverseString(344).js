var reverseString = function(s) 
{
    let startIndex = 0;
    let finalIndex = s.length - 1;
    
    while(startIndex < finalIndex)
        {
            let temp = s[startIndex];
            s[startIndex] = s[finalIndex];
            s[finalIndex] = temp;
            
            startIndex++;
            finalIndex--;
        }
};