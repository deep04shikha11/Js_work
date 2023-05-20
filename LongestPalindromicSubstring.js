var LongestPalindromicSubstring = function (strng) {
    let n = strng.length;
    function substring(L,R){
        let temp = '';
        while (L>=0 && R<n && strng[L]==strng[R]) {
            L = L-1
            R = R+1            
        }
        for (let i = L+1; i < R; i++) {
            temp = temp + strng[i];            
        }
        return temp;
    }
    let ans = '';
    let odd_sub = '';
    let even_sub = '';
    for (let k = 0; k < n; k++) {
        odd_sub = substring(k,k);
        even_sub = substring(k,k+1);
        if (odd_sub.length>ans.length) {
            ans = odd_sub;
        }
        if (even_sub.length>ans.length) {
            ans = even_sub;
        }        
    }
    return ans;
}

A = "babad";
const res = LongestPalindromicSubstring(A);
console.log('res='+res);
