function rom_val(rom_num) {
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
        const curNum = romanVal[rom_num[n]];
        const nxtNum = romanVal[rom_num[n+1]];
        if (nxtNum && nxtNum >curNum) {
            ans += nxtNum - curNum;
            n++;
        } else {
            ans += curNum;
        }        
    }
    return ans ;
}

const rN = "MCMXCIV";
const iN = rom_val(rN);
console.log('Roman ='+rN);
console.log('Roman to interger='+iN);