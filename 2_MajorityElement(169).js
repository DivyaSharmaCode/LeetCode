var majorityElement = function(nums) 
{
 const hash = {};
   for(const element of nums)
   {
       hash[element] = hash[element] + 1 || 1;
   }

   for (const key in hash)
   {
       if(hash[key] > Math.floor(nums.length/2))
       {
           return key;
       }
   } 
}