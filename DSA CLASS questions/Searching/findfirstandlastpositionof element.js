function lowerbound(arr, x){
    let n =  arr.length;
    let lo = 0 
    let hi  =  n-1
    let ans =  arr.length
    while(lo <= hi){
        let mid =  lo + Math.floor((hi - lo )/ 2);
        if(arr[mid] < x){
            lo =  mid + 1;
        }
        else{
            ans =  mid;
            hi = mid - 1
        }
    }
    return ans 
}
function upperbound(arr, x){
    let n =  arr.length;
    let lo = 0 
    let hi  =  n-1
    let ans =  arr.length
    while(lo <= hi){
        let mid =  lo + Math.floor((hi - lo) / 2);
        if(arr[mid] <= x){
            lo =  mid + 1;
        }
        else{
            ans =  mid;
            hi = mid - 1
        }
    }
    return ans 
}
var searchRange = function(nums, target){
    let lb = lowerBound(nums, target);
    if(lb == nums.length || nums[lb] != target) {
        return [-1, -1];
    }
    let ub = upperBound(nums, target);
    return [lb, ub -1];
};
