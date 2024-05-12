// Итерации в массивах
// forEach

const score = [5, 10, 0, 15];

for (const [i, el] of score.entries()) {
    console.log(`Раунд ${i + 1}: ${el}`);
}
score.forEach((el, i) => {
    console.log(`Раунд ${i + 1}: ${el}`);
});


// map

const transactionsInUsd = [10, -7, 50, -10, 100];
const exchangeRate = 60;
const transactionsInRub = [];

for (const transaction of transactionsInUsd) {
    transactionsInRub.push(transaction * exchangeRate);
}
console.log(transactionsInRub);


const transactionsInRub2 = transactionsInUsd
    .map(transaction => transaction * exchangeRate);
console.log(transactionsInRub2);




