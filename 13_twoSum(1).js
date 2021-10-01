var twoSum = function(nums, target) 
{
    let numIndex = new Map();
    let result = [];
    
    for(i = 0; i < nums.length; i++)
        {
            let num = nums[i];
            let comp = target - num;
            
            if(numIndex.has(comp))
                {
                    result[0] = numIndex.get(comp);
                    result[1] = i;
                    return result;
                }
            numIndex.set(num,i);
        }
    return result;
};