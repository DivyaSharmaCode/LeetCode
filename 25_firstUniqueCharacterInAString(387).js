let frequencies = {};
    let result = -1;
    
    for(let char of s)
        {
            if(frequencies[char] === undefined)
                {
                    frequencies[char] = 1;
                }
            else
                {
                    frequencies[char]++;
                }
        }
    
    for(let i = 0;  i < s.length; i++)
        {
            let char = s.charAt(i);
            
            if(frequencies[char] === 1)
                {
                    return i;
                }
        }
    
    return result;