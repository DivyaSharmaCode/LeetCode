/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) 
{
    let anchor = 0;
    
    for(let explorer = 0; explorer < nums.length; explorer++)
        {
            if(nums[explorer] != 0)
                {
                    let temp = nums[anchor];
                    nums[anchor] = nums[explorer];
                    nums[explorer] = temp;
                    
                    anchor++;
                }
            
        }
};