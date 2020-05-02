let myArr = ['the fix of mobile telephon',
    'the fix of monile telephon',
    'the fix of mobile telefon',
    'th fix of mobile telefon',
    'rte fixe of movile telefon',
    'the fix of mobile telephon',
    'the try to fix talet']

// function MyObject(arr) {
//     let map = new Map();
//     this.numberOfStrings = arr.length;
//     for (let i = 0; arr.length; i++) {
//         map.set([i], arr[i])
//     }
//     this.myMap = map
// };
// let q = new MyObject(myArr);
// console.log(q.numberOfStrings);
// console.log(q.myMap);
// // myArr.forEach(function(item, index, array) {

// //   });

// //   str.split(delim)


// let myArr = ['the fix of mobile telephon', '2'];
console.log(myArr);

let myArr0 = myArr[0];
let map0 = new Map();
for (i = 0; i < myArr0.length; i++) {
    let q;
    if (!map0.get(myArr0[i])) {
        map0.set(myArr0[i], 1);
    } else {
        q = +map0.get(myArr0[i]);
        map0.set(myArr0[i], ++q)
    }
}

let myArr1 = myArr[1];
let map1 = new Map();
let countAll = 0;
let countMiss = 0;
for (i = 0; i < myArr1.length; i++) {
    let q;
    if (!map1.get(myArr1[i])) {
        map1.set(myArr1[i], 1);
    } else {
        q = +map1.get(myArr1[i]);
        map1.set(myArr1[i], ++q)
    }
}

if (map0.size >= map1.size) {
    for (let i of map0.keys()) {
        countAll++;
        if (map0.get(i) != map1.get(i)) {
            countMiss++;
        }
    }
    console.log(countAll);
    console.log(countMiss);
} else {
    for (let i of map1.keys()) {
        countAll++;
        if (map0.get(i) != map1.get(i)) {
            countMiss++;
        }
    }
    console.log(countAll);
    console.log(countMiss);
}
let def = Math.round (+countMiss / +myArr0.length * 100);
console.log('Deferens = ' + def + ' %');
// console.log(map0);
// console.log(map1);
// console.log(myArr0);
// console.log(myArr1);
