function selectionsort (arr){
    let n =  arr.length
    for(let i = 0 ; i < n-1 ; i++){
let min_idx = FindMinElement(arr, i);
if(min_idx != 1){
    let temp = arr[i]
    arr[i] = arr[min_idx]
    arr[min_idx] = temp
}
    }
}

function FindMinElement (arr,  i ){
    let min_idx_el = i
    for(let j = i +1 ; j < arr.length; j++){
        if (arr[j] < arr[min_idx_el]){
            min_idx_el =  j;
        }
    }
    return min_idx_el
}


let  arr = [1,3,-1,0]

selectionsort(arr)
console.log(arr)