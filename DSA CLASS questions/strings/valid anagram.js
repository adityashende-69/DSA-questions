let validAnagram =  function (s ,t) {
   if(s.length != t.length){
    return false
   }
   
    const mp = {}
    for(i = 0 ;  i < s.length ; i++)
    {
        if(mp[s[i]]){
            mp[s[i]] += 1;
        }
        else
        mp[s[i]] = 1
    }

    for(i = 0 ; i < t.length ;  i++ ){
    if(mp[t[i]] == undefined){
        return false 
    }
    else{
        mp[t[i]] -= 1;
        if(mp[t[i]] == 0){
            delete mp[t[i]]
        }
    }
}
    return Object.keys(mp).length == 0;
}