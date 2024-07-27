let squareOfSortedArrays = function(nums){
    let n  =  nums.length
    let right = n-1;  
    let left = 0;
    let result =  Array(n);
    for(let i =  n-1 ; i >= 0 ; i--)
if(nums[left]**2 <nums[right]**2){
    result[i] =  nums[right]**2
    right--
}else
{
    result[i] = nums[left]**2
    left++
}
return result;
}

z = [-3,-2,-1,0,1,2,3,4]
console.log(squareOfSortedArrays(z))