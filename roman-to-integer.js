function rom_val(rom_num) {
    console.log('rom_num='+rom_num);
    const romanVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let ans = 0;
    for (let n = 0; n < rom_num.length; n++) {
        console.log('n='+n);
        console.log('rom_num[n]='+rom_num[n]);
        const curNum = romanVal[rom_num[n]];
        console.log('curNum='+curNum);
        const nxtNum = romanVal[rom_num[n+1]];
        console.log('nxtNum='+nxtNum);
        if (nxtNum && nxtNum >curNum) {
            ans += nxtNum - curNum;
            n++;
        } else {
            ans += curNum;
        }  
        console.log('ans='+ans);
        console.log('------------------');
    }
    return ans ;
}

const rN = "MCMXCIV";
const iN = rom_val(rN);
console.log('Roman ='+rN);
console.log('Roman to interger='+iN);