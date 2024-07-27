function bubblesort (arr){
    let n = arr.length
for( let i = 0; i < n; i++){
    for(let j = 0; j < n-i-1;  j++ ){
        if(arr[j] > arr[j+1]){
            let temp =  arr[j]
            arr[j+1] = arr [j]
            arr[j+1] = temp

        }
    }
}
}
let arr = [4,2,5,6,1,-1]
bubblesort(arr)
console.log(arr)