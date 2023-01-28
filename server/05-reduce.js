const totals = [10, 200, 30, 400, 50, 590];

let sumTotals = 0;
for(let total of totals){
    sumTotals += total;
}
console.log(sumTotals)

let sumTotals2 = 0;
for(let total in totals){
    sumTotals2 += totals[total]
}
console.log(sumTotals2);

const total = totals.reduce((acc, crrValue) => acc + crrValue, 0);
console.log(total)