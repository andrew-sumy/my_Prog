withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3); // 4
withoutTwoZeros(2, 4); // 10

function withoutTwoZeros(a, b) {
    let iter = (2 ** (+a + +b));
    let ar = [];
    // console.log(iter);
    for (let i = 0; i < iter; i++) {
        ar.push(i.toString(2));
        let ari = ar[i];
        while (ari.length < (a + b)) {
            ari = `0${ari}`;
            ar[i] = ari;
        }
    }
    ar.forEach((el, ind) => {
        let count1 = b;
        let count0 = a;
        for (let i = 0; i < el.length; i++) {
            if (el[i] === '0') {
                // console.log(count1);
                count0--;
            }
            if (count0 < 0) {
                // console.log('   <<<   >>>   ');
                ar[ind] = '';
                i = el.length;
            }
            if (el[i] === '1') {
                // console.log(count1);
                count1--;
            }
            if (count1 < 0) {
                // console.log('   <<<   >>>   ');
                ar[ind] = '';
                i = el.length;
            }
            if ((el[i] == el[i + 1]) && (el[i] == 0)) {
                // console.log('delet', ar[ind]);
                ar[ind] = '';
                i = el.length;
            }
        }
    })
    let sorted = ar.filter(item => item != '');
    // console.log(ar);
    console.log(sorted);
    console.log(sorted.length);
}

