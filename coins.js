const res = new Map();
function amountTocoins(num, coins) {
    let valCoin = coins[0];
    let ofCoins = Math.floor(num / coins[0]);
    let ost = Math.floor(num % coins[0]);
    res.set(valCoin, ofCoins);
    coins.shift();
    if (coins.length > 0) {
        amountTocoins(ost, coins);
    } else {
        console.log(res);
        let output = [];
        for (let i of res.keys()) {
            while (res.get(i) > 0) {
                output.push(i)
                res.set(i, (res.get(i) - 1));
            }
        }
        return console.log(output);
    }
}
amountTocoins(46, [25, 10, 5, 2, 1]);