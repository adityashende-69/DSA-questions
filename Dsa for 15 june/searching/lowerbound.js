function lowerbound (arr, a){
    let n =  arr.length
    let ans =  arr.length
    let lo = 0 
    let hi =  n-1
    while ( hi => lo)
        {
        let  mid  =  lo + Math.floor((hi-lo)/2)
        if (arr[mid] < a){
            lo =  mid + 1
        }
        else
        {
            ans = mid
            hi = mid - 1
        }
        }
        return ans
}
let arr =   [ 1,1,4,4,5,6,7,8]
console.log(lowerbound(arr,1))