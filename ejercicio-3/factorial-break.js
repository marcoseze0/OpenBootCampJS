let vueltas = 1;
let factorial = 10;

while (vueltas <= 9) {
    if (vueltas < 1) {
        break;
    }
    else {
        factorial += factorial * vueltas;
        vueltas++
    }


}

console.log(factorial);