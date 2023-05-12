// get sum of int between string
var s = 'f12r3id45ay deep234';
let dgt = parseInt(s.replace(/[^0-9]/g,""));
let sum = 0;
let rev = 0;
console.log('Num ='+dgt);
while(dgt>0){
    rev = dgt%10;
    sum = sum + rev;
    dgt = Math.floor(dgt/10);
}
console.log('Sum of digits in string ='+sum);