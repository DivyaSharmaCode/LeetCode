/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) 
{
    if(n < 1)
        {
            return false;
        }
    
    let powerOfTwo = 1;
    
    while(powerOfTwo < n)
        {
            powerOfTwo *= 2;
        }
    return powerOfTwo === n;
};