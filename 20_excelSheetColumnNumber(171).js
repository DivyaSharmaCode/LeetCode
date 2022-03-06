/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle)
{
    let result = 0;
    let index = 0
    
    for(let i = columnTitle.length - 1; i >= 0; i--)
        {
            result += (Math.pow(26, index++) * (columnTitle[i].charCodeAt(0) - 65 + 1)); 
        }
    return result;
};