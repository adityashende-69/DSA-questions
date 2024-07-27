function binarysearch(arr,a)
{
    let n =  arr.length
    let lo =  0 
    let hi = n -1
    while( lo <= hi){
        let mid =  lo + Math.floor((hi - lo)/2)
        if(arr[mid] == a){
            return mid;
        }
        else if(arr[mid] < a)
        {
            lo = mid + 1
        }
        else
        {

            hi = mid-1
        }
        
    }
    return -1
}
 let arr = [-1,0,10,11,16,17]
console.log(binarysearch(arr , 17))