function upperbound (arr , a){
    let n = arr.length
    let hi = n-1 ; let lo =  0
    let ans =  arr.length
       while( lo <=  hi){
         let mid =  lo + Math.floor((hi - lo)/2)
        if (arr[mid] <=  a)
            {
                lo = mid + 1
            }
            else
            {
                ans =  mid 
                hi =  mid - 1
            }
}
return ans
} 
  let arr = [-1,1,3,4,5,6,6,6,8]
  console.log(upperbound(arr))
