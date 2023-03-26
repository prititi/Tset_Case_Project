const crypto = require('crypto');
let ope = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);
let ans;
if(ope === 'add'){
    ans = num1 + num2;
}
else if(ope === 'sub'){
    ans = num1 - num2;
}
else if(ope === 'mult'){
    ans = num1 * num2;
}
else if(ope === 'divide'){
    ans = num1/num2;
}
else if(ope === 'sin'){
    ans = Math.sin(num1);
}
else if(ope === 'cos'){
    ans = Math.cos(num1);
}
else if(ope === 'tan'){
    ans = Math.tan(num1);
}
else if(ope === 'random'){
    let length =  num1;
    ans = crypto.randomBytes(length).toString('heans');
}
else if(ope !== 'add' || ope !== 'sub' || ope !== 'mult' || ope !== 'divide' || ope !== 'sin' || ope !== 'cos' || ope !== 'tan' || ope !== 'random'){
    ans = 'Invalid ope !'
}

console.log(ans);