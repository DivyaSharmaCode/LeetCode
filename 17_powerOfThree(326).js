/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) 
{
    if(n < 1)
        {
            return false;
        }
    
    let powerOfThree = 1;
    
    while(powerOfThree < n)
        {
            powerOfThree *= 3;
        }
    return powerOfThree === n;
};