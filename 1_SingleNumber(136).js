var singleNumber = function (nums)
{
  const hash = {};
   for(const element of nums)
   {
       hash[element] = hash[element] + 1 || 1;
   }

   for (const key in hash)
   {
       if(hash[key] === 1)
       {
           return key;
       }
   }
};