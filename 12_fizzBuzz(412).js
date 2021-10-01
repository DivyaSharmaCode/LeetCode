var fizzBuzz = function(n) 
{
    let result = [];
    
    let divisibilityMap = { 3: 'Fizz', 5: 'Buzz'};
    
    for(let i = 1; i <= n; i++)
        {
            let str = '';
            
            for(let key in divisibilityMap)
                {
                    if(i % parseInt(key, 10) === 0)
                        {
                            str += divisibilityMap[key];
                        }
                }
            if(str.length === 0)
                {
                    str += i;
                }
            result.push(str);
        }
    return result;
};