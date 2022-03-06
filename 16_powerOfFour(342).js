/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) 
{
    if(n < 1)
        {
            return false;
        }
    
    let powerOfFour = 1;
    
    while(powerOfFour < n)
        {
            powerOfFour *= 4;
        }
    return powerOfFour === n;
};