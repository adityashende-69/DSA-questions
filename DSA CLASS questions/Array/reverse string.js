let z =  ["h", "e", "l", "l", "o"]
let reverseString  = function (s){
    let n = s.length
    let i = 0
    let j = n-1
    while(i <= j){
        let temp  = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
}


reverseString(z);
console.log(z)