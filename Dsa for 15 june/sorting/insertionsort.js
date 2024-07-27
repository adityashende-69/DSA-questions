function insertionsort(arr){
    let n =  arr.length
    for(let i = 1 ; i < n;  i++){
 let element =  arr[i];
 for(j = i-1; j >= 0;  j--){
   if(arr[j] > element) {
    arr[j+1] = arr[j]
   }
   else{
    break
   }
 }
 arr[j+1] = element
    }
}
let arr =  [3,2,1,0,-4,6,-10]
insertionsort(arr)
console.log(arr)